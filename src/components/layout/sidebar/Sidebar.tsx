import { menus } from '@/constants/menus'
import { cn } from '@/utils/cn'

import MenuItem from './MenuItem'

const Sidebar = () => {
  return (
    <nav
      className={cn(
        'hidden',
        'overflow-y-auto',
        'lg:flex flex-col h-full fixed top-[var(--header-height)] left-0 w-80 overflow-y-auto border-r border-neutral-400 dark:border-neutral-700'
      )}
    >
      {menus.map((area) => (
        <MenuItem key={area.title} menu={area} isInitialToggled />
      ))}
    </nav>
  )
}

export default Sidebar
