import { Link } from "react-router-dom";

import bgDog1 from "../assets/bg-dog1.png";
import bgDog2 from "../assets/bg-dog2.png";
import bgDog3 from "../assets/bg-dog3.png";
import bgDog4 from "../assets/bg-dog4.png";

export const AdoptionForm = () => {
  return (
    <div className="bg-rosa-forte flex flex-col flex-grow min-h-[95vh] items-center justify-center relative">
      <div className="absolute bottom-0 right-0 hidden lg:block w-[250px]">
        <img className="w-full" src={bgDog1} alt="Desenho de cachorro" />
      </div>
      <div className="absolute bottom-0 left-0 hidden lg:block w-[250px]">
        <img className="w-full" src={bgDog2} alt="Desenho de cachorro" />
      </div>
      <div className="absolute bottom-[230px] right-0 hidden lg:block w-[250px]">
        <img className="w-full" src={bgDog3} alt="Desenho de cachorro" />
      </div>
      <div className="absolute bottom-[230px] left-0 hidden lg:block w-[250px]">
        <img className="w-full" src={bgDog4} alt="Desenho de cachorro" />
      </div>
      <div className="bg-white p-[30px] flex flex-col justify-center w-[90%] sm:w-[500px] rounded-xs">
        <h2 className="font-bold text-xl text-center mb-2 sm:text-2xl">
          <span className="text-verde-primario">&lt;</span>Formulário de adoção
          <span className="text-verde-primario">&gt;</span>
        </h2>
        <form className="my-4">
          <div className="flex flex-col justify-center items-center">
            <div className="text-center text-4xl">Página em Construção!!</div>
            <div className='bg-verde-primario w-[230px] h-[40px] flex items-center justify-center text-sm font-medium rounded-md mt-4'>
              <Link className="" to="/congratulations">Adotar</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
