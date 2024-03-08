import { Post } from 'contentlayer/generated'

import Title from '@/components/common/Title'
import CalendarIcon from '@/components/icons/CalendarIcon'
import { DateFormatTypeEnum, formatDate } from '@/utils/format-date'

type Props = {
  post: Post
}

const BlogHeader = ({ post }: Props) => {
  return (
    <div className="flex flex-col items-center py-6 gap-y-2">
      <Title>{post.title}</Title>
      <span className="text-secondary text-sm">- {post.description} -</span>
      <div className="flex items-center gap-x-1">
        <CalendarIcon className="w-5 h-5" />
        <span className="text-sm">
          {formatDate(post.date, DateFormatTypeEnum.DateOnly)}
        </span>
      </div>
    </div>
  )
}

export default BlogHeader
