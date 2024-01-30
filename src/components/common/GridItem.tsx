import Badge from './Badge'
import CustomImage from './CustomImage'

type Props = {
  src: string
  category: string
  alt?: string
}

const GridItem = ({ src, category, alt }: Props) => {
  return (
    <div className="relative">
      <CustomImage src={src} alt={alt} className="w-40 h-56" />

      <Badge
        text={category}
        className="absolute bottom-4 right-4 w-12 h-12 flex flex-shrink-0"
      />
    </div>
  )
}

export default GridItem
