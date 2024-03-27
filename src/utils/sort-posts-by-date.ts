import { Post } from 'contentlayer/generated'

export const sortPostsByDate = (posts: Post[], isRecent: boolean) => {
  return isRecent
    ? posts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      )
    : posts.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      )
}
