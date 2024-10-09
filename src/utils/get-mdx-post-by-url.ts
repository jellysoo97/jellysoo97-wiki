import { getMdxData } from './get-mdx-data'

export const getMdxPostByUrl = async (url: string) => {
  const { posts } = await getMdxData()
  const currentPost = posts.find((post) => post.metadata.url === url)
  const sameTagPosts = posts.filter(
    (post) => post.metadata.tag === currentPost?.metadata.tag
  )
  const prevPost = posts[sameTagPosts.indexOf(currentPost!) + 1] || null
  const nextPost = posts[sameTagPosts.indexOf(currentPost!) - 1] || null

  return { currentPost, prevPost, nextPost }
}
