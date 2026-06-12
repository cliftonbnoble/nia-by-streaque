/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pure static export → Cloudflare Pages serves out/ directly off the CDN.
  // No server runtime, no OpenNext/Workers needed (every route is static).
  output: "export",
  // The site uses plain <img> tags; this also keeps next/image export-safe.
  images: { unoptimized: true },
  poweredByHeader: false,
  // Security headers live in public/_headers — Cloudflare Pages applies them at
  // the edge (headers() isn't available in a static export).
};

export default nextConfig;
