import { ONGsSectionItem } from "./ONGsSectionItem"

import logoAbrace from '../assets/logos-ongs/logo-abrace.jpg'
import logoApa from '../assets/logos-ongs/logo-apa.jpg'
import logoApata from '../assets/logos-ongs/logo-apata.jpg'
import logoASL from '../assets/logos-ongs/logo-asl.jpg'
import logoAu from '../assets/logos-ongs/logo-au.jpg'
import logoCausaPet from '../assets/logos-ongs/logo-causapet.jpg'
import logoGPA from '../assets/logos-ongs/logo-gpa.jpg'
import logoUpac from '../assets/logos-ongs/logo-upac.jpg'

export const ONGsSection = () => {
  return (
    <div className="p-6 md:p-10 lg:px-20 bg-purple-50 flex flex-col items-center justify-center">
      <h2 className="font-bold md:text-xl text-center">Instituições Parceiras:</h2>

      <div className="w-full overflow-x-auto flex justify-center items-center">
        <div className="flex flex-nowrap gap-5 md:gap-10 p-5">
          <ONGsSectionItem borderColor="roxo-primario" name="Abrace" image={logoAbrace} />
          <ONGsSectionItem borderColor="verde-primario" name="APA" image={logoApa} />
          <ONGsSectionItem borderColor="roxo-primario" image={logoApata} name="APATA"/>
          <ONGsSectionItem borderColor="verde-primario" image={logoASL} name="ASL" />
          <ONGsSectionItem borderColor="roxo-primario"image={logoAu} name="AU" />
          <ONGsSectionItem borderColor="verde-primario" image={logoCausaPet} name="Causa Pet"/>
          <ONGsSectionItem borderColor="roxo-primario"image={logoGPA} name="GPA" />
          <ONGsSectionItem borderColor="verde-primario" image={logoUpac} name="UPAC" />
        </div>
      </div>
    </div>
  );
};
