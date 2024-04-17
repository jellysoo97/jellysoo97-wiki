import Sidebar from '@/components/layout/Sidebar'

type Props = {
  children: React.ReactNode
}

const PostListPageLayout = ({ children }: Props) => {
  return (
    <>
      <Sidebar />
      {children}
    </>
  )
}

export default PostListPageLayout
