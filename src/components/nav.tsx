import { BiHomeAlt, BiUser } from 'react-icons/bi'
import { BsClipboardData, BsBriefcase, BsChatSquareText } from 'react-icons/bs'
import { type IconType } from 'react-icons'
import { Link } from 'react-scroll'

type NavLink = {
  path: string
  icon: IconType
}

const navLinks: NavLink[] = [
  { path: 'home', icon: BiHomeAlt },
  { path: 'about', icon: BiUser },
  { path: 'services', icon: BsClipboardData },
  { path: 'work', icon: BsBriefcase },
  { path: 'contact', icon: BsChatSquareText },
]

export const Nav = () => {
  return (
    <nav className="fixed bottom-2 z-50 w-full overflow-hidden lg:bottom-8">
      <div className="container mx-auto">
        <div className="mx-auto flex h-[96px] w-full max-w-[460px] items-center justify-between rounded-full bg-black/20 px-5 text-2xl text-white/50 backdrop-blur-2xl">
          {navLinks.map((navLink: NavLink, index: number) => {
            const { path, icon: Icon } = navLink
            return (
              <Link
                key={index}
                to={path}
                activeClass="active"
                spy
                smooth
                className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center"
              >
                <Icon />
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
