import { SubmitButton } from "../components/SubmitButton"
import { FaHeart } from "react-icons/fa6"
export const Congratulations = () => {
  return (
    <>
        <div className="display: flex justify-center bg-gray-100 h-300">
        <div className="max-w-200 max-h-190 m-25 bg-white">
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

          <div className="m-4">
            <SubmitButton
              label='Voltar para home'
            />
          </div>
      </div>
      </div>
    </>
  )
}