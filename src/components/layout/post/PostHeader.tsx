import { Post } from 'contentlayer/generated'

import Title from '@/components/common/Title'
import UnderlineLink from '@/components/common/UnderlineLink'
import { CategoryEnum, categoryKR, TagEnum, tagKR } from '@/constants/menus'
import { DateFormatTypeEnum, formatDate } from '@/utils/format-date'

type Props = {
  post: Post
}

const PostHeader = ({ post }: Props) => {
  return (
    <div className="flex flex-col gap-y-2 mt-4">
      <div className="flex items-center gap-x-1">
        <p className="text-secondary text-size-small mr-2">
          {formatDate(post.date, DateFormatTypeEnum.DateOnlyWithDot)}
        </p>
        <UnderlineLink
          href={`/${post.category}`}
          className="text-secondary text-size-small"
        >
          #{categoryKR[post.category as CategoryEnum]}
        </UnderlineLink>
        {post.tags.map((tag) => (
          <UnderlineLink
            key={tag}
            href={`/${post.category}/${tag}`}
            className="text-secondary text-size-small"
          >
            #{tagKR[tag as TagEnum]}
          </UnderlineLink>
        ))}
      </div>

      <Title>{post.title}</Title>
    </div>
  )
}

export default PostHeader
