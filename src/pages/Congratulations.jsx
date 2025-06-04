import { FaHeart } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export const Congratulations = () => {
  const location = useLocation();
  const { pet, guardian, user, adoption } = location.state || {};

  if (!pet || !guardian || !user) {
    return <p className="text-center p-20">Dados não encontrados.</p>;
  }

  return (
    <>
      <div className="flex justify-center bg-gray-100">
        <div className="max-w-2xl m-4 sm:m-25 bg-white rounded-md">
          <div className="flex justify-center text-6xl text-roxo-primario pb-5 pt-8">
            <FaHeart />
          </div>

          <div className="flex justify-center text-3xl font-bold text-center text-roxo-primario font-sans w-50 m-auto pb-5">
            Match feito com sucesso!
          </div>

          <hr className="m-3 opacity-25" />

          <div className="p-5 pb-5 ">
            Seu interesse por <strong className="text-roxo-primario">{pet.nome}</strong> foi enviado para o responsável. Agora é só aguardar o contato para tornar esse encontro oficial!
          </div>

          <div className="flex flex-col p-5 gap-2">
            <p className="text-roxo-primario font-bold">Informações pessoais</p>
            <span>Nome: {adoption.nome}</span>
            <span>CPF: {adoption.cpf}</span>
            <span>E-mail: {user.email}</span>
            <span>Telefone: {adoption.cel}</span>
          </div>

          <hr className="m-3 opacity-20" />

          <div className="flex flex-col p-5 gap-2">
            <p className="text-roxo-primario font-bold">Informações do pet</p>
            <span>Nome: {pet.nome}</span>
            <span>Responsável: {guardian.nome}</span>
            <span>Email: {guardian.email}</span>
          </div>

          <div className="w-full flex items-center justify-center p-6">
            <Link
              className="text-white text-center font-medium text-sm py-2 px-4 rounded-md transition-colors duration-75 font-inter focus:outline-none focus:shadow-outline w-full cursor-pointer mt-5 bg-verde-primario hover:bg-verde-escuro"
              to="/"
            >
              Voltar para a home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
