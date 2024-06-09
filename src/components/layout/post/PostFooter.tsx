import { Post } from 'contentlayer/generated'
import Link from 'next/link'

import LeftChevronIcon from '@/components/icons/LeftChevronIcon'
import RightChevronIcon from '@/components/icons/RightChevronIcon'
import { getAllSortedPosts } from '@/utils/posts'

type Props = {
  post: Post
}

const PostFooter = ({ post }: Props) => {
  const posts: Post[] = getAllSortedPosts().filter(
    (elem) => elem.category === post.category && elem.tags[0] === post.tags[0]
  )
  const currentPostIndex = posts.indexOf(post)
  const prevPost = posts[currentPostIndex + 1]
  const nextPost = posts[currentPostIndex - 1]

  return (
    <>
      <section className="flex justify-between items-center mb-8">
        {prevPost ? (
          <Link href={prevPost.url} className="flex items-center gap-x-2">
            <LeftChevronIcon className="text-secondary" />
            <div>
              <p className="text-size-small text-secondary">이전글</p>
              <p className="w-[250px]">{prevPost.title}</p>
            </div>
          </Link>
        ) : (
          <div></div>
        )}
        {nextPost && (
          <Link href={nextPost.url} className="flex items-center gap-x-2">
            <div>
              <p className="text-size-small text-secondary">다음글</p>
              <p className="w-[250px]">{nextPost.title}</p>
            </div>
            <RightChevronIcon className="text-secondary" />
          </Link>
        )}
      </section>

      {/* TODO: giscus */}
      {/* <section>giscus</section> */}
    </>
  )
}

export default PostFooter
