import { ONGItem } from "./ONGItem";
import logoAbrace from "../assets/logos-ongs/logo-abrace.jpg";
import logoApa from "../assets/logos-ongs/logo-apa.jpg";
import logoApata from "../assets/logos-ongs/logo-apata.jpg";
import logoASL from "../assets/logos-ongs/logo-asl.jpg";
import logoAu from "../assets/logos-ongs/logo-au.jpg";
import logoCausaPet from "../assets/logos-ongs/logo-causapet.jpg";
import logoGPA from "../assets/logos-ongs/logo-gpa.jpg";
import logoUpac from "../assets/logos-ongs/logo-upac.jpg";
import ReturnButton from "./ReturnButton";

export const ONGsList = () => {
  return (
    <div className="py-6 px-2 sm:p-6 md:p-10 lg:px-20 bg-purple-50 w-screen flex flex-col">
      <div className="flex items-center justify-between mb-5 px-6 sm:px-0">
        <h2 className="font-bold md:text-xl">Ajude quem ajuda:</h2>
        <ReturnButton />
      </div>
      <div className="flex flex-col justify-center items-center"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center">
        <ONGItem
          nome="GPA"
          img={logoGPA}
          link="https://www.instagram.com/gpa_grupodeprotecaoanimal/"
          pix="gpa.internet@gmail.com"
        />
        <ONGItem
          nome="Abrace"
          img={logoAbrace}
          link="https://www.instagram.com/ong.abrace/"
          pix="24287894000100/C"
        />
        <ONGItem
          nome="Abrigo São Lázaro"
          img={logoASL}
          link="https://www.instagram.com/abrigosaolazaro/"
          pix="13043465/0001-71"
        />
        <ONGItem
          nome="Au"
          img={logoAu}
          link="https://www.instagram.com/animaisuniversitarios/"
          pix="85989079977"
        />
        <ONGItem
          nome="Causa Pet"
          img={logoCausaPet}
          link="https://www.instagram.com/causapet/"
          pix="queroajudar@causapet.com"
        />
        <ONGItem
          nome="Apata"
          img={logoApata}
          link="https://www.instagram.com//apata_ceara"
          pix="apatace@gmail.com"
        />
        <ONGItem
          nome="Upac"
          img={logoUpac}
          link="https://www.instagram.com/upacfortaleza/"
          pix="10.647.789/0001-20"
        />
        <ONGItem
          nome="Apa"
          img={logoApa}
          link="https://www.instagram.com/apa_fortaleza/"
          pix="85989948973"
        />
      </div>
    </div>
  );
};
