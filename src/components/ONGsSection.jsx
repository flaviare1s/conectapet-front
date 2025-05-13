import { ONGsSectionItem } from "./ONGsSectionItem"

import logoAbrace from '../assets/logos-ongs/logo-abrace.png'
import logoApa from '../assets/logos-ongs/logo-apa.png'
import logoApata from '../assets/logos-ongs/logo-apata.png'
import logoASL from '../assets/logos-ongs/logo-asl.png'
import logoAu from '../assets/logos-ongs/logo-au.png'
import logoCausaPet from '../assets/logos-ongs/logo-causapet.png'
import logoGPA from '../assets/logos-ongs/logo-gpa.png'
import logoUpac from '../assets/logos-ongs/logo-upac.png'

export const ONGsSection = () => {
  return (
    <div className="p-6 md:p-10 lg:px-20 bg-purple-50 flex flex-col items-center justify-center mb-5">
      <h2 className="font-bold md:text-xl text-center">Instituições Parceiras:</h2>

      <div className="w-full overflow-x-auto flex justify-center items-center">
        <div className="flex flex-nowrap gap-5 md:gap-10 p-5">
          <ONGsSectionItem image={<img src={logoAbrace} alt="Logo de ONG de Proteção Animal" />} />
          <ONGsSectionItem image={<img src={logoApa} alt="Logo de ONG de Proteção Animal" />} />
          <ONGsSectionItem image={<img src={logoApata} alt="Logo de ONG de Proteção Animal" />} />
          <ONGsSectionItem image={<img src={logoASL} alt="Logo de ONG de Proteção Animal" />} />
          <ONGsSectionItem image={<img src={logoAu} alt="Logo de ONG de Proteção Animal" />} />
          <ONGsSectionItem image={<img src={logoCausaPet} alt="Logo de ONG de Proteção Animal" />} />
          <ONGsSectionItem image={<img src={logoGPA} alt="Logo de ONG de Proteção Animal" />} />
          <ONGsSectionItem image={<img src={logoUpac} alt="Logo de ONG de Proteção Animal" />} />
        </div>
      </div>
    </div>
  );
};
