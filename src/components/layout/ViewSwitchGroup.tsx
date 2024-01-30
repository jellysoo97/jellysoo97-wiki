import useView from '@/hooks/use-view'
import { cn } from '@/utils/cn'

import IconButton from '../common/IconButton'
import GridViewIcon from '../icons/GridViewIcon'
import ListViewIcon from '../icons/ListViewIcon'

const ViewSwitchGroup = () => {
  const { isGridView, toggleView } = useView()

  return (
    <>
      <IconButton
        className={cn(
          'hidden md:flex',
          'rounded-full',
          isGridView && 'bg-primary drop-shadow-base'
        )}
        onClick={() => toggleView('grid')}
      >
        <GridViewIcon
          className={cn('w-6 h-6', isGridView && 'fill-yellow-500')}
        />
      </IconButton>
      <IconButton
        className={cn(
          'hidden md:flex',
          'rounded-full',
          !isGridView && 'bg-primary drop-shadow-base'
        )}
        onClick={() => toggleView('list')}
      >
        <ListViewIcon />
      </IconButton>
    </>
  )
}

export default ViewSwitchGroup
