/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export (out/) served by a Cloudflare Worker (worker/index.js) through
  // the Workers Static Assets ASSETS binding. The Worker also handles the one
  // dynamic route, POST /api/lead — see worker/index.js + wrangler.jsonc.
  output: "export",
  // The site uses plain <img> tags; this also keeps next/image export-safe.
  images: { unoptimized: true },
  poweredByHeader: false,
  // Security headers live in public/_headers — Workers Static Assets applies them
  // at the edge (headers() isn't available in a static export).
};

export default nextConfig;
