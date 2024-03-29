import { Post } from 'contentlayer/generated'

import Title from '@/components/common/Title'
import { DateFormatTypeEnum, formatDate } from '@/utils/format-date'

type Props = {
  post: Post
}

const PostHeader = ({ post }: Props) => {
  return (
    <div className="flex flex-col mt-4">
      <p className="text-secondary text-size-small">
        {formatDate(post.date, DateFormatTypeEnum.DateOnlyWithDot)}
      </p>
      <Title>{post.title}</Title>
    </div>
  )
}

export default PostHeader
