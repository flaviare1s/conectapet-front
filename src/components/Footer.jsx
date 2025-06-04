import { Link } from "react-router-dom"
import logo from "../assets/logo-pb.png"
import { useAuth } from "../contexts/AuthContext"

export const Footer = () => {
  const { user } = useAuth()
  const getRedirectPath = () => {
    if (user?.role === "guardian") return "/mypets";
    return "/pets";
  };

  return (
    <footer className="bg-black text-white p-6 flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 pb-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-[56px] md:w-[83px]">
              <img src={logo} alt="" />
            </div>
            <h2 className="font-bold text-lg md:text-xl">ConectaPet</h2>
          </div>
          <div>
            <p className="text-sm">Somos uma ponte entre animais resgatados e pessoas dispostas a amar. No ConectaPet, acreditamos que todo pet merece um lar seguro, acolhedor e responsável.</p>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <h3 className="font-bold mb-3">Navegação</h3>
            <nav className="flex flex-col text-sm gap-2">
              <Link className="hover:opacity-50" to="/about" >Sobre</Link>
              <Link className="hover:opacity-50" to={getRedirectPath()} >Pets</Link>
              <Link className="hover:opacity-50" to="/ongs" >ONGs parceiras</Link>
            </nav>
          </div>
          <div>
            <h3 className="font-bold mb-3">Quero ajudar</h3>
            <nav className="flex flex-col text-sm gap-2">
              <Link className="hover:opacity-50" to="/signup/user" >Quero adotar</Link>
              <Link className="hover:opacity-50" to={user?.role === "user" ? "/pets" : "/signup/user"}>Conectar pets</Link>
              <Link className="hover:opacity-50" to="/signup/guardian" >Sou uma ONG</Link>
            </nav>
          </div>
        </div>
        <div>
          <div>
            <h3 className="font-bold mb-3">Fale com a gente</h3>
            <div className="text-sm flex flex-col gap-2">
              <a className="hover:opacity-50" href="mailto:contato@conectapet.com" target="_blank">contato@conectapet.com</a>
              <a className="hover:opacity-50" href="tel:+5585999999999">(85) 99999-9999</a>
              <Link className="hover:opacity-50" to="/privacy-policy" >Política de Privacidade</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center border-t border-cinza pt-4 w-full">
        <p className="text-[rgba(255,255,255,0.41)]">© 2025 - ConectaPet</p>
      </div>
    </footer>
  )
}
