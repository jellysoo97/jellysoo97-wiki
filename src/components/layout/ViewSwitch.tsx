import useView from '@/hooks/use-view'
import { cn } from '@/utils/cn'

import IconButton from '../common/IconButton'
import GridViewIcon from '../icons/GridViewIcon'
import ListViewIcon from '../icons/ListViewIcon'

const ViewSwitch = () => {
  const { isGridView, toggleView } = useView()

  return (
    <>
      <IconButton
        className={cn(
          'hidden md:flex',
          'backdrop-blur-lg rounded-full',
          isGridView && 'bg-deep-yellow '
        )}
        onClick={toggleView}
      >
        <GridViewIcon
          className={cn('w-6 h-6', isGridView && 'fill-pale-yellow')}
        />
      </IconButton>
      <IconButton
        className={cn(
          'hidden md:flex',
          'backdrop-blur-lg rounded-full',
          !isGridView && 'bg-deep-yellow '
        )}
        onClick={toggleView}
      >
        <ListViewIcon className={cn(isGridView && 'fill-pale-yellow')} />
      </IconButton>
    </>
  )
}

export default ViewSwitch
