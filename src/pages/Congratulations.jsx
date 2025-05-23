import { Link } from "react-router-dom"
import { SubmitButton } from "../components/SubmitButton"
import { FaHeart } from "react-icons/fa6"
export const Congratulations = () => {
  return (
    <>
        <div className="display: flex justify-center bg-gray-100">
        <div className="max-w-200 m-1 sm:m-25 bg-white rounded-md">
          <div className="display: flex justify-center text-6xl text-roxo-primario pb-5 pt-8"><FaHeart/></div>
        
          <div className="display: flex justify-center text-3xl font-bold text-center text-roxo-primario font-inter: font-sans-serif w-50 m-auto pb-5">   
            Match feito com sucesso!
          </div>

          <hr className=" m-3 opacity-25"/>
        
          <div className="display: flex justify-center p-5 pb-15 ">
            Seu interesse por [nome do pet] foi enviado para o responsável. Agora é so aguardar o contato para tornar esse encontro oficial!
          </div>
          
          <div className="display: flex flex-col p-5 gap-2">
            <p className="text-roxo-primario font-bold">Informações pessoais</p>
            <span>Nome:</span>
            <span>CPF:</span>
            <span>Email:</span> 
            <span>Celular:</span> 
          </div>

          <hr className="m-3 opacity-20"/>

          <div className="display: flex flex-col p-5 gap-2">
            <p className="text-roxo-primario font-bold">Informações de ONG</p>
            <span>Nome:</span>
            <span>Email:</span>
            <span>Cidade:</span>
            <span>Telefone:</span>            
          </div>

          <div className="w-full flex items-center justify-center p-6">
            <Link className="text-white text-center font-medium text-sm py-2 px-4 rounded-md transition-colors duration-75 font-inter focus:outline-none focus:shadow-outline w-full cursor-pointer mt-5 bg-verde-primario hover:bg-verde-escuro" to="/">Voltar para a home</Link>
          </div>
      </div>
      </div>
    </>
  )
}