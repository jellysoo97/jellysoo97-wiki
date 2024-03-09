import { Post } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { useMemo } from 'react'

import Title from '@/components/common/Title'
import { allSortedPosts } from '@/constants/posts'

type Props = {
  params: { slug: string }
}

const SeriesPage = ({ params }: Props) => {
  const seriesPosts: Post[] = useMemo(
    () => allSortedPosts.filter((post) => post.url.includes(params.slug)),
    [params.slug]
  )
  const seriesTitle = seriesPosts[0].series

  if (!seriesPosts.length) {
    notFound()
  }

  return (
    <div className="flex flex-col gap-y-8 mt-8">
      <Title>
        {seriesTitle} ({seriesPosts.length})
      </Title>

      <section></section>
    </div>
  )
}

export default SeriesPage
