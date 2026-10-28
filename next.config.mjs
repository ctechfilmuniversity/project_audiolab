/** @type {import('next').NextConfig} */

// GitHub Pages serves the site from /project_audiolab; the workflow sets this.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""

const nextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
