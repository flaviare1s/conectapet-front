import { Link } from "react-router-dom";
import bg from "../assets/bg-banner2.png";
import { useAuth } from "../contexts/AuthConText";

export const Banner2 = () => {
  const { user } = useAuth();

  return (
    <div className="h-full flex">
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-white opacity-30"></div>
      <div className="flex-shrink-0 w-full sm:w-[600px] h-full sm:relative absolute top-0 left-0 -z-20">
        <img
          className="w-full h-full object-cover"
          src={bg}
          alt="Pessoa abraçando um cachorro"
        />
      </div>
      <div className="bg-verde-primario h-full hidden sm:flex flex-col items-center justify-center md:px-2 lg:px-20 w-full">
        <p className="font-bold text-xl mb-5 sm:hidden lg:block">Ajude um pet a encontrar seu lar!</p>
        <p className="font-medium mb-7 text-lg text-cinza sm:hidden lg:block">
          Se você é protetor independente ou representa uma ONG, cadastre
          animais resgatados e faça parte dessa rede de amor e cuidado!
        </p>
        {user && user.role === "guardian" && (
          <Link
            to="/mypets"
            className="bg-roxo-primario text-branco w-[230px] h-[40px] flex items-center justify-center text-sm font-medium rounded-md mt-4 hover:bg-rosa-forte sm:hidden md:flex"
          >
            Conecte um pet
          </Link>
        )}
        {!user && (
          <Link
            to="/signup/guardian"
            className="bg-roxo-primario text-branco w-[230px] h-[40px] flex items-center justify-center text-sm font-medium rounded-md mt-4 hover:bg-rosa-forte sm:hidden lg:flex"
          >
            Conecte um pet
          </Link>
        )}
        {user && user.role === "user" && (
          <Link
            to="/about"
            className="bg-roxo-primario text-branco w-[230px] h-[40px] flex items-center justify-center text-sm font-medium rounded-md mt-4 hover:bg-rosa-forte sm:hidden md:flex"
          >
            Conecte um pet
          </Link>
        )}
      </div>
      <div className="sm:hidden flex flex-col items-center justify-between p-10 h-full">
        <h2 className="text-4xl text-roxo-primario font-extrabold">
          <span>
            <span className="text-verde-primario">&lt;</span>ConectaPet
            <span className="text-verde-primario">&gt;</span>
          </span>
        </h2>
        <div className="flex flex-col items-center justify-end">
          <p className="font-bold mb-7 text-lg text-center px-10">
            Ajude um pet a encontrar seu lar!
          </p>
          {user && user.role === "guardian" && (
            <Link
              to="/mypets"
              className="bg-roxo-primario text-branco w-[230px] h-[40px] flex items-center justify-center text-sm font-medium rounded-md mt-4 hover:bg-rosa-forte"
            >
              Conecte um pet
            </Link>
          )}
          {!user && (
            <Link
              to="/signup/guardian"
              className="bg-roxo-primario text-branco w-[230px] h-[40px] flex items-center justify-center text-sm font-medium rounded-md mt-4 hover:bg-rosa-forte"
            >
              Conecte um pet
            </Link>
          )}
          {user && user.role === "user" && (
            <Link
              to="/about"
              className="bg-roxo-primario text-branco w-[230px] h-[40px] flex items-center justify-center text-sm font-medium rounded-md mt-4 hover:bg-rosa-forte"
            >
              Conecte um pet
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
