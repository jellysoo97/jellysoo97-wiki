import { getPosts } from './get-posts'

export const getPost = async (url: string) => {
  const posts = await getPosts()
  const currentPost = posts.find((post) => post.frontmatter.url === url)
  const sameTagPosts = posts.filter(
    (post) => post.frontmatter.tag === currentPost?.frontmatter.tag
  )

  return {
    currentPost,
    prevPost: posts[sameTagPosts.indexOf(currentPost!) + 1] || null,
    nextPost: posts[sameTagPosts.indexOf(currentPost!) - 1] || null,
  }
}
