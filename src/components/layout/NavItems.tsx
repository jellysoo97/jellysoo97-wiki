import Link from 'next/link'

const NavItems = () => {
  return (
    <nav>
      <ul className="flex space-x-8">
        <li>
          <Link href={'/blog'}>Blog</Link>
        </li>
        <li>
          <Link href={'/about'}>About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavItems
