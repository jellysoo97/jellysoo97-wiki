import { menus } from '@/constants/menus'

import MenuItem from './MenuItem'

const Sidebar = () => {
  return (
    <nav className="hidden lg:flex flex-col h-full fixed top-[var(--header-height)] left-0 w-80 px-4 py-6 overflow-y-auto border-r border-neutral-400 dark:border-neutral-700">
      {menus[0].children?.map((menu) => (
        <ul
          key={menu.title}
          className={'w-full flex flex-col space-y-2 mt-4 first:mt-0'}
        >
          <MenuItem menu={menu} />
        </ul>
      ))}
    </nav>
  )
}

export default Sidebar
