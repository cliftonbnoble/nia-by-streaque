# Nia by Streaque — Security & Trust Packet

**Version:** 1.0 (first pass) · **Prepared:** June 2026 · **Audience:** CISOs, IT/security teams, data-privacy officers, and procurement reviewers evaluating Nia for a campus.

> **How to read this.** This packet answers the questions most institutions ask during a security review — how student data is protected, where it lives, how the AI is governed, and what compliance posture we hold today. It is intentionally written in plain English with enough architectural detail to make an informed decision. The deeper material — full architecture diagrams, our DPA, the named sub-processor list, and a live walkthrough — is reserved for a call under NDA. **If you need the remaining detail, [start a security review](https://streaque.com/contact) or email security@streaque.com and we'll schedule a one-on-one.**
>
> _Honesty policy: we mark what's live today vs. on our roadmap, and we never claim a certification we don't hold. We'd rather earn your trust with an accurate answer than an impressive one._

---

## 1. Executive summary — security posture at a glance

| Area | Posture today |
|---|---|
| **Hosting model** | Multi-tenant SaaS on managed U.S. cloud infrastructure, with strong **logical isolation** between institutions (see §3). |
| **Encryption in transit** | TLS 1.3 on every connection; database connections require SSL. |
| **Encryption at rest** | Managed-platform encryption at rest, **plus** application-layer encryption with **per-institution keys** for the most sensitive data (see §4). |
| **Identity** | Enterprise SSO via Auth0 (OIDC/JWT). SAML/Google/Microsoft ready. We never store passwords. |
| **Tenant isolation** | Enforced at **four independent layers** — database row-level security, per-institution encryption keys, per-institution AI knowledge stores, and query-level authorization (see §3). |
| **AI governance** | Model-agnostic. **Customer data is never used to train foundation models.** Only the minimal context needed for the current request leaves our environment, under enterprise no-training terms. The AI's database access is **read-only and tenant-scoped** (see §6). |
| **FERPA** | Architected for it: we operate as a **"school official" with a legitimate educational interest** under FERPA §99.31(a)(1). |
| **GDPR** | Aligned; data-subject and institutional controls supported. |
| **SOC 2 / penetration testing** | **On our roadmap, not yet underway** — the controls are built; the third-party attestation is the next step. We do not claim a certification we don't hold. |
| **Vulnerability reporting** | security@streaque.com · acknowledged within one business day. |

---

## 2. What data we handle, and the principle behind it

Nia turns the signals a campus already has — LMS (Canvas), SIS, and CRM data — into proactive, evidence-based coaching for students. The data we touch falls into a few categories:

- **Identity & profile:** name, institutional email, role, the institution they belong to, and (where provided by SSO) basic profile attributes.
- **Academic signals:** course engagement, assignments, deadlines, and grades surfaced through the institution's LMS/SIS — used to coach the student.
- **Conversations:** the student's interactions with Nia.

**Our governing principle is data minimization.** We ingest only what's needed to coach the student, the institution controls what Nia is allowed to see, and the most sensitive fields are encrypted with keys unique to your institution. We do not sell or share student data — it is not in our business model, and never will be.

> _On a call we can walk through the exact field-level data inventory and the institutional controls for scoping what Nia ingests._

---

## 3. Tenancy & isolation — how one institution's data stays separate from another's

This is the question every CISO asks first, so we built isolation at **four independent layers**. An issue would have to defeat all of them, in order, to expose one institution's data to another:

1. **Database row-level security (RLS).** Student records live in a managed PostgreSQL database where row-level security policies are enforced *by the database itself* — the question "should this user see this row?" is answered both by our application and by the database. Privileged server-side access is separated from the policy-enforced application client and is used only for audited server operations.
2. **Per-institution encryption keys.** Each institution's most sensitive data is encrypted with its own Data Encryption Key (DEK), wrapped by a master Key Encryption Key (KEK) held in a dedicated secrets manager (see §4). A worst-case key exposure is contained to a single institution.
3. **Per-institution AI knowledge stores.** The institutional knowledge the AI can retrieve (policies, syllabi, resources) lives in a **separate per-institution collection** in our vector store. There is no shared index across institutions — retrieval for one campus cannot surface another's content.
4. **Query-level authorization.** When the AI answers a data question, the generated query is **read-only and automatically scoped** to the requesting user and institution. Queries that touch protected student tables without the correct user/institution scope are rejected before execution (see §6).

> _Result: cross-institution data access is **blocked by design** at multiple layers, not by a single check._

---

## 4. Encryption

**In transit.** All connections use **TLS 1.3**. Database connections require SSL; cache connections support TLS.

**At rest.** Two complementary layers:

- **Platform-level:** the managed database and object storage provide encryption at rest.
- **Application-level (the part most vendors skip):** before sensitive values are written, we encrypt them in our application with **per-institution envelope encryption** — a unique Data Encryption Key per institution, wrapped by a master Key Encryption Key held in a dedicated secrets manager (never in source code, container images, or config files). LMS OAuth tokens and institutional integration secrets are encrypted with authenticated symmetric encryption. Where applicable, encrypted values are cryptographically bound to the institution and field they belong to, so a record can't be replayed against a different student or moved to another field. Ciphertext is versioned, so keys can be rotated without re-encrypting the whole database.

> _The exact algorithms, key-rotation procedures, and the field-by-field encryption coverage are covered under NDA on a security call._

---

## 5. Identity & access management

- **Authentication is delegated to Auth0** (OIDC/JWT) — the enterprise identity platform. **We never see or store a student password.**
- **SSO-ready** for Google Workspace, Microsoft 365, SAML, and Shibboleth, so students sign in with their existing university credentials.
- **MFA** is enforced at the identity-provider layer; institutions control their own MFA policy.
- **Every API call is validated** — token signature, key ID, audience, issuer, and expiry are checked on each request, before any database query runs.
- **Service-to-service calls** use a separate internal key compared in **constant time** (timing-attack resistant), with optional network/IP allow-listing.
- **Least-privilege** access controls and audited privileged access on the server side.

---

## 6. AI & model governance

This is the area unique to an AI product, and where we hold a deliberately conservative posture.

- **Model-agnostic by design.** Nia routes through enterprise model APIs operating under **no-training, no-retention** terms. **No customer data is used to train Nia's models or any third party's foundation models.**
- **Minimal data leaves our environment.** Conversation history and student records stay in *our* system. For any given request, only the **minimal context** needed to answer the current question is sent to the model provider — never the full history, and never raw bulk records.
- **Retrieval is scoped and chunked.** When Nia draws on institutional knowledge, it retrieves only the **most relevant excerpts** from your institution's own knowledge store — full documents are never transmitted to the model.
- **The AI's data access is read-only and tenant-scoped.** When a student asks a data question, the system generates a query that is validated to be **read-only** (no writes, no schema changes, no stacked statements, no system functions) and **automatically scoped** to that student and institution. **This is the backstop that contains prompt-manipulation risk:** even if a student tried to coax the assistant into misbehaving, the authorization layer prevents access to any other student's or institution's data.
- **Internal reasoning is not exposed.** Tool execution and internal routing steps are filtered out of what the student sees; safety/guardrail messages can never be suppressed.
- **Input is validated** before it reaches the model, and database errors are sanitized so internal details never reach a client.

> _What stays under NDA (our "secret sauce"): the agent architecture, prompts, model-orchestration logic, and the NL2SQL internals. We'll describe the governance and safety model in as much depth as you need on a call — without handing over the implementation._

---

## 7. Application security

A single control is one mistake from failing, so we layer them:

- **Tiered, per-endpoint rate limiting** (stricter on authentication) to blunt brute-force, credential-stuffing, and abuse.
- **Context-aware input validation** with SQL-injection and XSS detection on inputs, tuned to avoid false positives on natural-language chat.
- **Security headers on every response:** `Content-Security-Policy`, `Strict-Transport-Security`, `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy`, and a restrictive `Permissions-Policy`.
- **CORS** restricted to an explicit origin allow-list (no wildcards).
- **OAuth CSRF protection** via cryptographically validated `state` parameters on the LMS integration.
- **Error & log sanitization:** identifiers, emails, IPs, file paths, connection strings, and secrets are stripped before they reach a client or a log line.

---

## 8. Infrastructure, monitoring & engineering hygiene

- **Managed U.S. cloud infrastructure** with least-privilege IAM separating execution and runtime roles.
- **Secrets are never in source code or container images** — they're held in a secrets manager and injected at runtime; pre-commit scanning blocks accidental secret commits.
- **Monitoring & alerting via Sentry** for security-relevant events (failed authentications, rate-limit violations, token-validation failures, anomalous query patterns), with structured JSON logging and request correlation IDs for incident forensics.
- **Dependency & supply-chain hygiene:** all dependencies are pinned with lock files; security patches are tracked and applied (e.g., we replaced a vulnerable JWT library and keep cryptography libraries current).
- **CI build validation** on every pull request before merge.

---

## 9. Data retention, deletion & portability

- The institution owns its data. Nia uses it only to provide the contracted service.
- **On offboarding or on request, we return and/or delete institutional data** in accordance with the institution's instructions and our agreement (DPA).
- For student education records, deletion and access requests are handled in coordination with the institution (consistent with our FERPA "school official" role).

> _Specific deletion timelines, the verification method, and data-export formats are defined in the DPA and reviewed on a call._

---

## 10. Compliance & certifications

**Today**
- **FERPA:** we operate as a **"school official" with a legitimate educational interest** under §99.31(a)(1), with role-based access, encryption in transit and at rest, and PII handling built into the architecture.
- **GDPR:** aligned; institutional and data-subject controls supported.
- **Accessibility:** we aim to meet **WCAG 2.1 AA** across the product and website, treated as an ongoing commitment rather than a one-time certification.
- **Federal registration:** registered in SAM.gov.

**On the roadmap (built but not yet attested)**
- **SOC 2 Type I → Type II** — the controls are in place; the third-party attestation is the next step. _Not yet underway; we will not claim otherwise._
- **Annual third-party penetration testing.**
- **A completed HECVAT** — we don't have one published yet; in the meantime we complete your institution's security questionnaire (HECVAT or your own) on request.
- **A customer trust portal** with sub-processor list, status, and audit-report access.
- **A coordinated vulnerability-disclosure / bug-bounty program.**

> _Our honest answer to "are you SOC 2 certified?" is **"not yet — the controls are built, and here's our timeline to the attestation."** We'd rather earn the certification properly than rush a checkbox._

---

## 11. Sub-processors

We rely on a small set of reputable infrastructure providers, by category:

- **Identity / authentication** (enterprise SSO/OIDC)
- **Managed cloud database & object storage** (U.S.-hosted)
- **LLM provider(s)** — operating under enterprise no-training, no-retention terms
- **Error monitoring / observability**

> _The full, **named** sub-processor list — with each provider's role, data categories, and contractual data terms — is provided in the DPA and on request under NDA. We notify customers of material sub-processor changes per the DPA._

---

## 12. Business continuity, backups & incident response

- Student data lives on a **managed database platform** with provider-managed backup capabilities; recovery procedures are maintained.
- **Incident notification:** if a security incident affecting your data ever occurs, you'll hear it from us — promptly, with what we know and what we're doing about it, per the timelines in our agreement. We will not hide an incident.
- **Formalized BC/DR runbooks and RPO/RTO targets** are part of our roadmap and reviewed on a call.

---

## 13. Reporting a vulnerability

Found a security issue? Email **security@streaque.com** with details. We acknowledge within one business day and will work with you on a coordinated disclosure timeline. Please don't post details publicly, access data that isn't yours, or run denial-of-service tests against production.

---

## 14. Questions we encourage you to ask us — and every vendor

We'll answer all of these in writing or on a call, with as much technical depth as you want:

1. Where do my students' encryption keys live, and who can access them?
2. If your codebase leaked tomorrow, what would happen to my data?
3. Do you train any AI model on student conversations or records?
4. If another of your customers were breached, could it reach us?
5. How fast will you tell us about an incident, and what's in that notice?
6. What identity provider do you support, and can students use existing university credentials?
7. How is our data returned and deleted when the contract ends, and how do we verify it?
8. Can we see your SOC 2 attestation and most recent penetration-test report? _(Answer today: both are on the roadmap; here's the timeline.)_

---

## 15. Contact

- **Security reviews & questionnaires:** security@streaque.com
- **Start a review through the site:** https://streaque.com/contact (choose "Security review")
- **Direct line to the team that built it:** Clifton Noble, CTO — clifton@streaque.com

---

_Nia is a product of Streaque, Inc., a U.S.-based company. This packet is provided for evaluation purposes and is superseded by the terms of any executed agreement (including the DPA). © 2026 Streaque, Inc._
