import { Post } from 'contentlayer/generated'

import Title from '@/components/common/Title'
import UnderlineLink from '@/components/common/UnderlineLink'
import { CategoryEnum, categoryKR, PartEnum, partKR } from '@/constants/menus'
import { DateFormatTypeEnum, formatDate } from '@/utils/format-date'

type Props = {
  post: Post
}

const PostHeader = ({ post }: Props) => {
  return (
    <div className="flex flex-col gap-y-2 mt-4">
      <div className="flex items-center">
        <p className="text-secondary text-size-small mr-2">
          {formatDate(post.date, DateFormatTypeEnum.DateOnlyWithDot)}
        </p>
        <UnderlineLink
          href={`/${post.part}`}
          className="text-secondary text-size-small mr-1"
        >
          #{partKR[post.part as PartEnum]}
        </UnderlineLink>
        <UnderlineLink
          href={`/${post.part}/${post.category}`}
          className="text-secondary text-size-small"
        >
          #{categoryKR[post.category as CategoryEnum]}
        </UnderlineLink>
      </div>

      <Title>{post.title}</Title>
    </div>
  )
}

export default PostHeader
