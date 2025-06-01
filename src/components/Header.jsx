import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { DesktopMenu } from './DesktopMenu';
import { MobileMenu } from './MobileMenu';
import { useAuth } from '../contexts/AuthContext';

export const Header = () => {

  const { user, logout } = useAuth()
  console.log('Usuário logado:', user);

  const getRedirectPath = () => {
    if (user?.role === "guardian") return "/mypets";
    return "/";
  };

  return (
    <header className='h-[104px] flex justify-between items-center px-6'>
      <Link to={getRedirectPath()} className="w-[74px] md:w-[105px]">
        <img className="w-full" src={logo} alt="Logo ConectaPet" />
      </Link>
      <div className='flex-1 flex justify-end pr-4 pb-3 md:pb-0 md:pr-10 items-center'>
        {user && (
          <span className="text-md text-verde-primario font-semibold mt-2 md:mt-0">
            Olá, <span className='text-roxo-primario'>{user.nome}</span>!
          </span>
        )}
      </div>

      <div className="hidden md:flex gap-3">
        {user ? (
          <div className="flex items-center gap-4">
            <DesktopMenu user={user} onLogout={logout} />
          </div>
        ) : (
          <DesktopMenu user={null} onLogout={logout} />
        )}
      </div>

      <div className="md:hidden">
        <MobileMenu user={user} onLogout={logout} />
      </div>
    </header>
  );
};
