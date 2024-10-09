import { getMdxPosts } from './get-mdx-posts'
import { getTags } from './get-tags'

export const getMdxData = async () => {
  const mdxPosts = await getMdxPosts()
  const donePosts = mdxPosts
    .filter(({ metadata }) => !metadata.draft)
    .sort((a, b) => b.metadata.date.getTime() - a.metadata.date.getTime())
  const tags = getTags(donePosts)

  return { posts: donePosts, tags }
}
