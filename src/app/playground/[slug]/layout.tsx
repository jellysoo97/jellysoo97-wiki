import Divider from '@/components/common/Divider'
import Footer from '@/components/layout/Footer'

type Props = {
  children: React.ReactNode
}

const PlaygroundPageLayout = ({ children }: Props) => {
  return (
    <div className="layout-container overflow-y-auto lg:ml-80">
      {children}
      <Divider />
      <Footer />
    </div>
  )
}

export default PlaygroundPageLayout
