import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkGfm from 'remark-gfm'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: '**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    date: { type: 'date', required: true },
    category: { type: 'string' },
    series: { type: 'string' },
    thumbnail: { type: 'string' },
  },
  computedFields: {
    area: {
      type: 'string',
      resolve: (post) => post._raw.flattenedPath.split('/')[0],
    },
    category: {
      type: 'string',
      resolve: (post) => {
        const slug = post._raw.flattenedPath.split('/')
        const [area, category] = slug

        return area === 'blog' && !post.series ? category : ''
      },
    },
    url: {
      type: 'string',
      resolve: (post) => `/${post._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypePrettyCode, { theme: 'one-dark-pro' }]],
  },
})
