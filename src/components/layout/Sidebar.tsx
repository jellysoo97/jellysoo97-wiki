import { menus } from '@/constants/menus'

import MenuItem from '../MenuItem'

const Sidebar = () => {
  return (
    <aside>
      {menus.map((menu) => (
        <MenuItem key={menu.title} menu={menu} />
      ))}
    </aside>
  )
}

export default Sidebar
