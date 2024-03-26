import { Post } from 'contentlayer/generated'

import Title from '@/components/common/Title'
import { CategoryEnum, categoryKR, PartEnum, partKR } from '@/constants/menus'
import { DateFormatTypeEnum, formatDate } from '@/utils/format-date'

type Props = {
  post: Post
}

const PostHeader = ({ post }: Props) => {
  return (
    <div className="flex flex-col mt-4 gap-y-1">
      <Title>{post.title}</Title>
      {!!post.description && (
        <span className="text-secondary text-size-small">
          {post.description}
        </span>
      )}
      <div className="flex items-center gap-x-2">
        <span className="text-secondary text-size-small">
          {partKR[post.part as PartEnum]} {'>'}{' '}
          {categoryKR[post.category as CategoryEnum]}
        </span>
        |
        <span className="text-size-small text-secondary">
          {formatDate(post.date, DateFormatTypeEnum.DateOnlyWithDot)}
        </span>
      </div>
    </div>
  )
}

export default PostHeader
