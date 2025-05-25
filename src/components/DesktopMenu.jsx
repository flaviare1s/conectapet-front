import { Link } from 'react-router-dom';

export const DesktopMenu = ({ user, onLogout }) => {
  const isLoggedIn = user !== null;
  const isGuardian = user?.role === 'guardian';

  return (
    <nav className="hidden sm:flex gap-3">
      {!isGuardian && <Link className="hover:text-roxo-primario hover:underline p-1" to='/'>Início</Link>}
      <Link className="hover:text-roxo-primario hover:underline p-1" to='/About'>Sobre</Link>
      {!isGuardian && <Link className="hover:text-roxo-primario hover:underline p-1" to='/Pets'>Pets</Link>}
      <Link className="hover:text-roxo-primario hover:underline p-1" to='/ONGs'>ONGs</Link>

      {isLoggedIn ? (
        <>
          {isGuardian && (
            <>
              <Link className="hover:text-roxo-primario hover:underline p-1 font-semibold" to='/mypets'>Meus pets</Link>
            </>
          )}
          <button
            onClick={onLogout}
            className="bg-roxo-primario text-white hover:bg-rosa-forte rounded-md py-2 px-6 text-xs font-bold cursor-pointer"
          >
            Sair
          </button>
        </>
      ) : (
        <>
          <Link className="hover:text-roxo-primario hover:underline p-1" to='/signup'>Cadastre-se</Link>
          <Link
            className="bg-roxo-primario text-white hover:bg-rosa-forte rounded-md py-2 px-6 text-xs font-bold"
            to='/Login'
          >
            Entrar
          </Link>
        </>
      )}
    </nav>
  );
};
