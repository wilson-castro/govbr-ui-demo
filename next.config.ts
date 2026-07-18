import type { NextConfig } from 'next'

// Static export for GitHub Pages when NEXT_OUTPUT=export (set by the deploy
// workflow). Local dev/build behavior stays unchanged otherwise.
const nextConfig: NextConfig = {
  output: process.env.NEXT_OUTPUT === 'export' ? 'export' : undefined,
  // Pages serves the site at https://<user>.github.io/<repo>/.
  basePath: process.env.NEXT_BASE_PATH || undefined,
}

export default nextConfig
