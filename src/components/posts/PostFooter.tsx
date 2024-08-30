import Link from 'next/link'

import LeftChevronIcon from '@/components/icons/LeftChevronIcon'
import RightChevronIcon from '@/components/icons/RightChevronIcon'
import { IMetadata, IPost } from 'src/types'

type Props = {
  metadata: IMetadata
  prevPost: IPost
  nextPost: IPost
}

const PostFooter = ({ metadata, prevPost, nextPost }: Props) => {
  return (
    <>
      <section className="flex items-center justify-between">
        {prevPost ? (
          <Link
            href={prevPost.metadata.url}
            className="flex items-center gap-x-2"
          >
            <LeftChevronIcon className="text-secondary" />
            <div>
              <p className="text-secondary text-size-small">이전글</p>
              <p className="w-[250px]">{prevPost.metadata.title}</p>
            </div>
          </Link>
        ) : (
          <div></div>
        )}
        {nextPost && (
          <Link
            href={nextPost.metadata.url}
            className="flex items-center gap-x-2"
          >
            <div>
              <p className="text-secondary text-size-small">다음글</p>
              <p className="w-[250px]">{nextPost.metadata.title}</p>
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
