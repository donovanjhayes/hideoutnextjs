// import { MetadataRoute } from 'next'
// import { allBlogs } from 'contentlayer/generated'
// import siteMetadata from '@/data/siteMetadata'

export const baseUrl = 'http://localhost:3000'

export default async function sitemap() {
  const blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/monthlyupdate/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  const routes = ['', '/monthlyupdate/'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}
