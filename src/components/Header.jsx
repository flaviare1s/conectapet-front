import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { DesktopMenu } from './DesktopMenu'
import { MobileMenu } from './MobileMenu'

export const Header = () => {
  return (
    <div className='h-[104px] flex justify-between items-center px-6'>
      <Link to="/" className='w-[74px] sm:w-[105px]'>
        <img className='w-full' src={logo} alt="Logo ConectaPet" />
      </Link>
      <div className="hidden sm:flex gap-3">
        <DesktopMenu/>
      </div>
      <div className="sm:hidden">
        <MobileMenu />
      </div>
    </div>
  )
}
