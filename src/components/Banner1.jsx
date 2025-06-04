import bgMobile from "../assets/bg-banner1-mobile.png"
import bgDesktop from "../assets/bg-banner1-desktop.png"
import { Link } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

export const Banner1 = () => {
  const { user } = useAuth()
  return (
    <div className="h-full relative">
      <div className="absolute top-0 left-0 w-full h-full sm:hidden -z-20">
        <img className="w-full h-full object-cover" src={bgMobile} alt="Pessoa abraçando um cachorro" />
      </div>
      <div className="absolute top-0 left-0 w-full h-full  -z-10 bg-black opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-full hidden sm:block -z-20">
        <img className="w-full h-full object-cover" src={bgDesktop} alt="Pessoa abraçando um cachorro" />
      </div>
      <div className="hidden sm:block px-[40px] pt-[150px]">
        <p className="font-bold text-xl">Seu melhor amigo a um clique de distância!</p>
        <h2 className="text-6xl font-extrabold text-roxo-primario py-5"><span><span className="text-verde-primario">&lt;</span>ConectaPet<span className="text-verde-primario">&gt;</span></span></h2>
        <p className="font-medium mb-7 text-lg">Pronto para encontrar seu futuro companheiro?</p>
        {user ? (
          <Link to="/pets" className="bg-roxo-primario text-branco w-[230px] h-[40px] flex items-center justify-center text-sm font-medium rounded-md mt-4 hover:bg-rosa-forte">
            Quero adotar
          </Link>
        ) : (
          <Link to="/signup/user" className="bg-roxo-primario text-branco w-[230px] h-[40px] flex items-center justify-center text-sm font-medium rounded-md mt-4 hover:bg-rosa-forte">
            Quero adotar
          </Link>
        )}
      </div>
      <div className="sm:hidden flex flex-col items-center justify-between p-10 h-full">
        <h2 className="text-4xl text-roxo-primario font-extrabold"><span><span className="text-verde-primario">&lt;</span>ConectaPet<span className="text-verde-primario">&gt;</span></span></h2>
        <div className="flex flex-col items-center justify-end">
          <p className="font-bold mb-7 text-lg text-center px-10">Seu melhor amigo a um clique de distância!</p>
          {user ? (
            <Link to="/pets" className="bg-roxo-primario text-branco w-[230px] h-[40px] flex items-center justify-center text-sm font-medium rounded-md mt-4 hover:bg-rosa-forte">
              Quero adotar
            </Link>
          ) : (
            <Link to="/signup/user" className="bg-roxo-primario text-branco w-[230px] h-[40px] flex items-center justify-center text-sm font-medium rounded-md mt-4 hover:bg-rosa-forte">
              Quero adotar
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
