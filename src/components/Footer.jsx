import { Link } from "react-router-dom"
import logo from "../assets/logo-pb.png"

export const Footer = () => {
  return (
    <footer className="bg-black text-white p-4 flex flex-col justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-[56px] md:w-[83px]">
              <img src={logo} alt="" />
            </div>
            <h2 className="font-bold text-lg md:text-xl">ConectaPet</h2>
          </div>
          <div>
            <p>Somos uma ponte entre animais resgatados e pessoas dispostas a amar. No ConectaPet, acreditamos que todo pet merece um lar seguro, acolhedor e responsável.</p>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <h3 className="font-bold">Navegação</h3>
            <nav className="flex flex-col text-sm">
              <Link to="/" >Início</Link>
              <Link to="/about" >Sobre</Link>
              <Link to="/pets" >Pets</Link>
              <Link to="/ongs" >ONGs parceiras</Link>
            </nav>
          </div>
          <div>
            <h3 className="font-bold">Quero ajudar</h3>
            <nav className="flex flex-col text-sm">
              <Link to="/signup/user" >Quero adotar</Link>
              <Link to="/pets" >Conectar pets</Link>
              <Link to="/signup/guardian" >Sou uma ONG</Link>
            </nav>
          </div>
        </div>
        <div>
          <div>
            <h3 className="font-bold">Fale com a gente</h3>
            <div className="text-sm">
              <p>contato@conectapet.com</p>
              <p>(85) 99999-9999</p>
              <Link to="/privacidade" >Política de Privacidade</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-cinza text-center border-t border-cinza py-4 w-full">
        <p>© 2025 - ConectaPet</p>
      </div>
    </footer>
  )
}
