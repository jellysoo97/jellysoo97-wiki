import ExpandableMenuItem from '@/components/layout/sidebar/ExpandableMenuItem'
import { menus } from '@/constants/menus'

export default function HomePage() {
  return (
    <div className="layout-container h-[var(--main-height)] flex justify-center items-center">
      {menus.map((menu) => (
        <ExpandableMenuItem key={menu.title} menu={menu} />
      ))}
    </div>
  )
}
