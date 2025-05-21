import { ONGItem } from "./ONGItem";
import logoApata from '../assets/logos-ongs/Ongs_listaPage/ong1.jpg'
import logoAbrace from '../assets/logos-ongs/Ongs_listaPage/ong2.jpg'
import logoApa from '../assets/logos-ongs/Ongs_listaPage/ong3.jpg'
import logoASL from '../assets/logos-ongs/Ongs_listaPage/ong4.jpg'
import logoAu from '../assets/logos-ongs/Ongs_listaPage/ong5.jpg'
import logoCausaPet from '../assets/logos-ongs/Ongs_listaPage/ong6.jpg'
import logoGPA from '../assets/logos-ongs/Ongs_listaPage/ong7.jpg'
import logoUpac from '../assets/logos-ongs/Ongs_listaPage/ong8.jpg'

export const ONGsList = () => {
  return (
    <div className="py-6 px-2 sm:p-6 md:p-10 lg:px-20 bg-purple-50 w-screen">
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-bold md:text-xl sm:hidden">Pets:</h2>
        <h2 className="font-bold md:text-xl hidden sm:block">
          Nossos parceiros:
        </h2>
        <button
          onClick={() => navigate(-1)}
          className="text-roxo-primario hover:underline cursor-pointer"
        >
          &larr; Voltar
        </button>
      </div>``
      <div className="flex flex-col justify-center items-center"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ONGItem nome='Apata' img={logoApata} link='https://www.instagram.com//apata_ceara' descricao={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, deserunt! Vitae et autem tenetur, totam illo error architecto dolor debitis obcaecati velit quisquam illum, eligendi consectetur repellendus nemo sit nisi."}/>
            <ONGItem nome="Abrace" img={logoAbrace} Link='https://www.instagram.com/ong.abrace/' descricao={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, deserunt! Vitae et autem tenetur, totam illo error architecto dolor debitis obcaecati velit quisquam illum, eligendi consectetur repellendus nemo sit nisi."}/>
            <ONGItem nome="Asl"  img={logoASL} Link='https://www.instagram.com/abrigosaolazaro/' descricao={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, deserunt! Vitae et autem tenetur, totam illo error architecto dolor debitis obcaecati velit quisquam illum, eligendi consectetur repellendus nemo sit nisi."}/>
            <ONGItem nome="Au" img={logoAu} Link='https://www.instagram.com/animaisuniversitarios/' descricao={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, deserunt! Vitae et autem tenetur, totam illo error architecto dolor debitis obcaecati velit quisquam illum, eligendi consectetur repellendus nemo sit nisi."}/>
            <ONGItem nome="CausaPet" img={logoCausaPet} Link='https://www.instagram.com/causapet/' descricao={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, deserunt! Vitae et autem tenetur, totam illo error architecto dolor debitis obcaecati velit quisquam illum, eligendi consectetur repellendus nemo sit nisi."}/>
            <ONGItem nome="GPA" img={logoGPA} Link='https://www.instagram.com/gpa_grupodeprotecaoanimal/' descricao={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, deserunt! Vitae et autem tenetur, totam illo error architecto dolor debitis obcaecati velit quisquam illum, eligendi consectetur repellendus nemo sit nisi."}/>
            <ONGItem nome="Upac" img={logoUpac} Link='https://www.instagram.com/projetoviralatascomraca/' descricao={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, deserunt! Vitae et autem tenetur, totam illo error architecto dolor debitis obcaecati velit quisquam illum, eligendi consectetur repellendus nemo sit nisi."}/>
            <ONGItem nome="APA" img={logoApa} Link='https://www.instagram.com/apa_fortaleza/' descricao={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, deserunt! Vitae et autem tenetur, totam illo error architecto dolor debitis obcaecati velit quisquam illum, eligendi consectetur repellendus nemo sit nisi."}/>

            
        </div>
    </div>
  );
};

// Trocar noem do backend para colocar de forma dinamica 
