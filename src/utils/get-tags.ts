import { IPost, TagEnum } from 'src/types'

import { tagColor, tagLabel } from '../constants'

export const getTags = (posts: IPost[]) => {
  const tags: Set<string> = new Set()

  tags.add(TagEnum.All)
  posts.forEach((post) => tags.add(post.metadata.tag))

  return [...tags].map((tag) => ({
    value: tag,
    label: tagLabel[tag],
    color: tagColor[tag],
    postCount: posts.filter((post) => post.metadata.tag === tag).length,
  }))
}
