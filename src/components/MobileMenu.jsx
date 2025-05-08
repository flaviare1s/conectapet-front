import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="sm:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-roxo-primario focus:outline-none cursor-pointer"
        aria-label="Abrir menu"
      >
        {isOpen ? <HiX size={34} /> : <HiMenu size={34} />}
      </button>

      <div
        className={`
          absolute top-[104px] right-0 w-full bg-white shadow-lg p-6 rounded-bl-md z-50 flex flex-col gap-4 text-gray-800
          transform transition-transform duration-300 ease-out
          ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'}
        `}
      >
        <Link onClick={() => setIsOpen(false)} to="/" className="hover:text-roxo-primario hover:underline">
          Início
        </Link>
        <Link onClick={() => setIsOpen(false)} to="/About" className="hover:text-roxo-primario hover:underline">
          Sobre
        </Link>
        <Link onClick={() => setIsOpen(false)} to="/Pets" className="hover:text-roxo-primario hover:underline">
          Pets
        </Link>
        <Link onClick={() => setIsOpen(false)} to="/ONGs" className="hover:text-roxo-primario hover:underline">
          ONGs
        </Link>
        <Link onClick={() => setIsOpen(false)} to="/signup" className="hover:text-roxo-primario hover:underline">
          Cadastre-se
        </Link>
        <Link
          onClick={() => setIsOpen(false)}
          to="/Login"
          className="bg-roxo-primario text-white hover:bg-rosa-forte rounded-md py-2 px-6 text-center text-sm font-bold"
        >
          Entrar
        </Link>
      </div>
    </div>
  )
}
