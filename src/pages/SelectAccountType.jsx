import { Link } from "react-router-dom";

export const SelectAccountType = () => {
  return (
    <div className="bg-verde-primario flex flex-col flex-grow min-h-[95vh] items-center justify-center relative">
      <div className="bg-white p-[30px] flex flex-col justify-center w-[90%] sm:w-[500px] rounded-xs">
        <h2 className="font-bold text-xl text-center mb-2 sm:text-2xl">
          <span className="text-verde-primario">&lt;</span>
          Escolha o tipo de conta
          <span className="text-verde-primario">&gt;</span>
        </h2>
        <small className="text-dark text-center">
          Já possui uma conta? Entre{" "}
          <Link className="underline" to="/login">
            aqui
          </Link>
        </small>
        <div>
          <div className="text-white font-medium text-sm py-2 px-4 rounded-md transition-colors duration-75 font-inter focus:outline-none focus:shadow-outline w-full cursor-pointer mt-5 bg-roxo-primario hover:bg-rosa-forte flex justify-center">
            <Link to="/signup/user">Quero adotar</Link>
          </div>
          <div className="text-white font-medium text-sm py-2 px-4 rounded-md transition-colors duration-75 font-inter focus:outline-none focus:shadow-outline w-full cursor-pointer mt-5 bg-roxo-primario hover:bg-rosa-forte flex justify-center ">
            <Link to="/signup/guardian">Quero conectar pets!</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
