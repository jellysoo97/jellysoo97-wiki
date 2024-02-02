import { useMDXComponent } from 'next-contentlayer/hooks'

import { allBlogPosts } from '@/constants/posts'

type Props = {
  params: { slug: string[] }
}

const BlogPostPage = ({ params }: Props) => {
  console.log(params)
  const { slug } = params
  const [_, category, series, title] = slug
  const post = allBlogPosts.find(
    (post) => post._raw.flattenedPath === `blog/${slug.join('/')}`
  )

  const MDXContent = useMDXComponent(post?.body.code || '')

  return <div>{MDXContent && <MDXContent />}</div>
}

export const generateStaticParams = async () => {
  return allBlogPosts.map((post) => ({
    slug: post._raw.flattenedPath.split('/'),
  }))
}

export default BlogPostPage
