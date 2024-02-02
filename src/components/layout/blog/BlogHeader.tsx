import { Post } from 'contentlayer/generated'

import Title from '@/components/common/Title'

type Props = {
  post: Post
}

const BlogHeader = ({ post }: Props) => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-y-2">
      <Title>{post.title}</Title>
    </div>
  )
}

export default BlogHeader
