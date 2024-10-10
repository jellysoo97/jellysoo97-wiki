import Link from 'next/link'
import { IFrontmatter, IPost } from 'src/types'

import LeftChevronIcon from '@/components/icons/LeftChevronIcon'
import RightChevronIcon from '@/components/icons/RightChevronIcon'
import { tagLabel } from '@/constants/index'

type Props = {
  frontmatter: IFrontmatter
  prevPost: IPost
  nextPost: IPost
}

const PostFooter = ({ frontmatter, prevPost, nextPost }: Props) => {
  return (
    <>
      <section className="flex items-center justify-between">
        {prevPost ? (
          <Link
            href={`/posts/${prevPost.frontmatter.url}`}
            className="flex items-center gap-x-2"
          >
            <LeftChevronIcon className="text-secondary" />
            <div>
              <p className="text-secondary text-size-small">이전글</p>
              <p className="w-[250px]">
                [{tagLabel[prevPost.frontmatter.tag]}]{' '}
                {prevPost.frontmatter.title}
              </p>
            </div>
          </Link>
        ) : (
          <div></div>
        )}
        {nextPost && (
          <Link
            href={`/posts/${nextPost.frontmatter.url}`}
            className="flex items-center gap-x-2"
          >
            <div className="text-right">
              <p className="text-secondary text-size-small">다음글</p>
              <p className="w-[250px]">
                [{tagLabel[nextPost.frontmatter.tag]}]{' '}
                {nextPost.frontmatter.title}
              </p>
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
