import { Link } from "react-router-dom"

export const DesktopMenu = () => {
  return (
    <div className="hidden md:flex gap-3">
        <Link className="hover:text-roxo-primario hover:underline p-1" to='/'>Início </Link>
        <Link className="hover:text-roxo-primario hover:underline p-1" to='/About'>Sobre </Link>
        <Link className="hover:text-roxo-primario hover:underline p-1" to='/Pets'>Pets </Link>
        <Link className="hover:text-roxo-primario hover:underline p-1" to='/ONGs'>ONGs </Link>
        <Link className="hover:text-roxo-primario hover:underline p-1" to='/signup'>Cadastre-se </Link>
        <Link className="bg-roxo-primario text-white hover:bg-rosa-forte rounded-sm py-1.5 px-2" to='/Login'>Entrar </Link>

    </div>
  )
}
