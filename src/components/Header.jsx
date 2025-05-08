import logo from '../assets/logo.png'
import { DesktopMenu } from './DesktopMenu'

export const Header = () => {
  return (
    <div className='h-[104px] flex justify-between items-center px-4'>
      <div className='w-[74px] md:w-[105px]'>
        <img className='w-full' src={logo} alt="Logo ConectaPet" />
      </div>
      <div className="hidden md:flex gap-3">
        <DesktopMenu/>
      </div>
    </div>
  )
}
