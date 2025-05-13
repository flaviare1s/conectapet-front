import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { DesktopMenu } from './DesktopMenu';
import { MobileMenu } from './MobileMenu';
import { useUser } from '../hooks/useUser';

export const Header = () => {
  const { user, logout } = useUser()
  return (
    <header className='h-[104px] flex justify-between items-center px-6'>
      <Link to="/" className='w-[74px] sm:w-[105px]'>
        <img className='w-full' src={logo} alt="Logo ConectaPet" />
      </Link>
      <div className='flex-1 flex justify-end pr-4 pb-3 sm:pb-0 sm:pr-10 items-center'>
        {user && (
          <span className="text-sm text-verde-primario font-semibold mt-2 sm:mt-0">
            Olá, <span className='text-roxo-primario'>{user.name}</span>!
          </span>
        )}
      </div>

      <div className="hidden sm:flex gap-3">
        {user ? (
          <div className="flex items-center gap-4">
            <DesktopMenu user={user} onLogout={logout} />
          </div>
        ) : (
          <DesktopMenu user={null} onLogout={logout} />
        )}
      </div>

      <div className="sm:hidden">
        <MobileMenu user={user} onLogout={logout} />
      </div>
    </header>
  );
};
