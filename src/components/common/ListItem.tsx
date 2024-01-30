import Badge from './Badge'

type Props = {
  category: string
  title: string
  description: string
}

const ListItem = ({ category, title, description }: Props) => {
  return (
    <div className="w-full flex p-4 space-x-6 border-b border-neutral-350">
      <Badge text={category} className="w-12 h-12" />

      <div className="flex flex-col space-y-2">
        <p className="text-xl font-bold">{title}</p>
        <p className="text-secondary">{description}</p>
      </div>
    </div>
  )
}

export default ListItem
