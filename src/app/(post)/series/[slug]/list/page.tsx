import Title from '@/components/common/Title'
import { allSeriesPosts } from '@/constants/posts'

type Props = {
  params: { slug: string }
}

const SeriesListPage = ({ params }: Props) => {
  const posts = allSeriesPosts.filter(
    (series) => series._raw.flattenedPath.split('/')[1] === params.slug
  )
  const series = posts[0].series

  return (
    <div className="flex flex-col">
      <Title>{series}</Title>
    </div>
  )
}

export const generateStaticParams = () => {
  return allSeriesPosts.map((series) => ({
    slug: series._raw.flattenedPath.split('/')[1],
  }))
}

export default SeriesListPage
