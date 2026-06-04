/* Shared wireframe atoms — used across all four directions */

const Logo = ({ size = 22 }) => (
  <span className="wf-logo" style={{ fontSize: size }}>
    <span className="wf-logo-mark" />
    <span>Streaque</span>
  </span>
);

const Nav = ({ cta = 'Contact Us' }) => (
  <div className="wf-nav">
    <Logo />
    <div className="wf-nav-links">
      <span>Home</span>
      <span style={{ opacity: 0.55 }}>About</span>
      <span style={{ opacity: 0.55 }}>How Nia Works</span>
      <span style={{ opacity: 0.55 }}>Contact</span>
    </div>
    <span className="wf-btn" style={{ fontSize: 14, padding: '6px 14px' }}>{cta}</span>
  </div>
);

const Btn = ({ children, variant = 'solid', size = 'md' }) => {
  const cls = ['wf-btn'];
  if (variant === 'ghost') cls.push('wf-btn-ghost');
  if (variant === 'accent') cls.push('wf-btn-accent');
  const fs = size === 'sm' ? 14 : size === 'lg' ? 20 : 18;
  const pad = size === 'sm' ? '6px 14px' : size === 'lg' ? '14px 26px' : '10px 18px';
  return <span className={cls.join(' ')} style={{ fontSize: fs, padding: pad }}>{children}</span>;
};

const Eyebrow = ({ children }) => <div className="wf-eyebrow">{children}</div>;

const Squiggle = ({ children, accent }) => (
  <span className={'wf-squiggle' + (accent ? ' accent' : '')}>{children}</span>
);

const Chip = ({ children, kind }) => {
  const cls = ['wf-chip'];
  if (kind === 'accent') cls.push('wf-chip-accent');
  if (kind === 'amber') cls.push('wf-chip-amber');
  return <span className={cls.join(' ')}>{children}</span>;
};

const Ph = ({ label, h = 120, w, style = {} }) => (
  <div className="wf-ph" style={{ height: h, width: w || '100%', ...style }}>
    {label}
  </div>
);

const Img = ({ label, h = 180, w, style = {} }) => (
  <div className="wf-img" style={{ height: h, width: w || '100%', ...style }}>
    <div className="wf-img-label">{label}</div>
  </div>
);

const Note = ({ children, style = {} }) => (
  <span className="wf-note" style={style}>※ {children}</span>
);

// Annotation with hand-drawn arrow. Position absolutely with `style`.
const Anno = ({ children, style = {}, arrowDir = 'left', arrowLen = 60 }) => {
  // arrow svg paths
  const paths = {
    left: <svg width={arrowLen} height="24" viewBox={`0 0 ${arrowLen} 24`}>
      <path className="wf-arrow" d={`M ${arrowLen-2} 12 Q ${arrowLen/2} 4, 4 14 L 10 10 M 4 14 L 10 18`} />
    </svg>,
    right: <svg width={arrowLen} height="24" viewBox={`0 0 ${arrowLen} 24`}>
      <path className="wf-arrow" d={`M 2 12 Q ${arrowLen/2} 4, ${arrowLen-4} 14 L ${arrowLen-10} 10 M ${arrowLen-4} 14 L ${arrowLen-10} 18`} />
    </svg>,
    down: <svg width="22" height={arrowLen} viewBox={`0 0 22 ${arrowLen}`}>
      <path className="wf-arrow" d={`M 11 2 Q 4 ${arrowLen/2}, 14 ${arrowLen-4} L 10 ${arrowLen-10} M 14 ${arrowLen-4} L 18 ${arrowLen-10}`} />
    </svg>,
    up: <svg width="22" height={arrowLen} viewBox={`0 0 22 ${arrowLen}`}>
      <path className="wf-arrow" d={`M 11 ${arrowLen-2} Q 4 ${arrowLen/2}, 14 4 L 10 10 M 14 4 L 18 10`} />
    </svg>,
  };
  const arrow = paths[arrowDir];
  const flexDir = arrowDir === 'left' ? 'row' : arrowDir === 'right' ? 'row-reverse' : arrowDir === 'down' ? 'column' : 'column-reverse';
  return (
    <div className="wf-anno" style={{ ...style, flexDirection: flexDir }}>
      {arrow}
      <span>{children}</span>
    </div>
  );
};

const SectionLabel = ({ n, name }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
    <span className="wf-num">{n}</span>
    <span className="wf-eyebrow">{name}</span>
    <span style={{ flex: 1, height: 1, background: 'var(--ink)', opacity: 0.25 }} />
  </div>
);

const TrustBadge = ({ children }) => (
  <span className="wf-chip" style={{ fontSize: 12, padding: '4px 12px' }}>
    <span className="wf-tick">✓</span> {children}
  </span>
);

const TRUST_ITEMS = [
  'Official Canvas Partner',
  'FERPA Aligned',
  'GDPR Aligned',
  'SSO Ready',
  'Mobile-First Security',
];

const FEATURES = [
  { title: 'Proactive Nudging', body: 'Turns LMS, SIS, and system signals into timely nudges.', icon: '↗' },
  { title: 'Evidence-Based Coaching', body: 'Motivational, scaffolded conversations grounded in research.', icon: '◎' },
  { title: 'Gets Smarter', body: 'Refines triggers, timing, and tone based on outcomes.', icon: '∞' },
  { title: 'Multi-Agent', body: 'Academic, career, and finance agents orchestrating together.', icon: '◈' },
];

const STATS = [
  { num: '93%', label: 'Students with active momentum plans' },
  { num: '75%', label: 'Students engaged with critical nudges' },
  { num: '63%', label: 'Recommendations completed by students' },
];

Object.assign(window, {
  Logo, Nav, Btn, Eyebrow, Squiggle, Chip, Ph, Img, Note, Anno,
  SectionLabel, TrustBadge,
  TRUST_ITEMS, FEATURES, STATS,
});
