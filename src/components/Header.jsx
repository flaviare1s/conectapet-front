import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { DesktopMenu } from './DesktopMenu';
import { MobileMenu } from './MobileMenu';

export const Header = ({ user, onLogout }) => {
  console.log("User no header:", user); // Debug para verificar se user está chegando

  const userName = user?.name || "Usuário";
  const userType = user?.type || "regular";

  const isLoggedIn = user !== null && user !== undefined;
  const isGuardian = userType === 'guardian';

  return (
    <header className='h-[104px] flex justify-between items-center px-6'>
      <Link to="/" className='w-[74px] sm:w-[105px]'>
        <img className='w-full' src={logo} alt="Logo ConectaPet" />
      </Link>

      <div className="hidden sm:flex gap-3">
        {isLoggedIn ? (
          <div className="flex items-center gap-4">
            <span className="text-lg font-semibold">{userName}</span>
            <DesktopMenu user={user} onLogout={onLogout} />
          </div>
        ) : (
          <DesktopMenu user={null} onLogout={onLogout} />
        )}
      </div>

      <div className="sm:hidden">
        <MobileMenu user={user} onLogout={onLogout} />
      </div>
    </header>
  );
};
