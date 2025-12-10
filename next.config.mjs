import createMDX from '@next/mdx'
import path from 'path'
import { fileURLToPath } from 'url'

/** @type {import('next').NextConfig} */
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'picsum.photos',
      },
    ],
  },
  // Set turbopack.root explicitly to avoid Next.js inferring the wrong workspace root
  turbopack: {
    root: path.resolve(__dirname),
  },
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
})

export default withMDX(nextConfig)