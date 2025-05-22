import { ONGItem } from "./ONGItem";
import logoApata from '../assets/logos-ongs/Ongs_listaPage/ong1.jpg'
import logoAbrace from '../assets/logos-ongs/Ongs_listaPage/ong2.jpg'
import logoApa from '../assets/logos-ongs/Ongs_listaPage/ong3.jpg'
import logoASL from '../assets/logos-ongs/Ongs_listaPage/ong4.jpg'
import logoAu from '../assets/logos-ongs/Ongs_listaPage/ong5.jpg'
import logoCausaPet from '../assets/logos-ongs/Ongs_listaPage/ong6.jpg'
import logoGPA from '../assets/logos-ongs/Ongs_listaPage/ong7.jpg'
import logoUpac from '../assets/logos-ongs/Ongs_listaPage/ong8.jpg'
import { useNavigate } from "react-router-dom";

export const ONGsList = () => {
  const navigate = useNavigate();

  return (
    <div className="py-6 px-2 sm:p-6 md:p-10 lg:px-20 bg-purple-50 w-screen flex flex-col">
      <div className="flex items-center justify-between mb-5 px-6 sm:px-0">
        <h2 className="font-bold md:text-xl">
          Nossos parceiros:
        </h2>
        <button
          onClick={() => navigate(-1)}
          className="text-roxo-primario hover:underline cursor-pointer"
        >
          &larr; Voltar
        </button>
      </div>
      <div className="flex flex-col justify-center items-center"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center">
            <ONGItem nome='GPA' img={logoApata} link='https://www.instagram.com//apata_ceara' pix=" E-mail apatace@gmail.com"/>
            <ONGItem nome="Abrace" img={logoAbrace} link='https://www.instagram.com/ong.abrace/' pix=" ABRACE 24287894000100 C"/>
            <ONGItem nome="Abrigo São Lázaro"  img={logoASL} link='https://www.instagram.com/abrigosaolazaro/' pix=" 13043465/0001-71"/>
            <ONGItem nome="Apata" img={logoAu} link='https://www.instagram.com/animaisuniversitarios/' pix=" 85989079977"/>
            <ONGItem nome="Au" img={logoCausaPet} link='https://www.instagram.com/causapet/' pix=" queroajudar@causapet.com"/>
            <ONGItem nome="Abrace" img={logoGPA} link='https://www.instagram.com/gpa_grupodeprotecaoanimal/' pix=" gpa.internet@gmail.com"/>
            <ONGItem nome="Apa" img={logoUpac} link='https://www.instagram.com/projetoviralatascomraca/' pix=" pvlr.pix@gmail.com"/>
            <ONGItem nome="Causa Pet" img={logoApa} link='https://www.instagram.com/apa_fortaleza/' pix=" (85) 98994-8973"/>

            
        </div>
    </div>
  );
};
