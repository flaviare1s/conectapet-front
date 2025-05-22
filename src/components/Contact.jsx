import Abraco from '../assets/contact/card-abraço.png';
import vectorx from '../assets/contact/vectorx.png';

import { InputField } from './InputField';
import { SubmitButton } from './SubmitButton';



// Acessando as variáveis no React usando import.meta.env.
const emailUser = import.meta.env.VITE_EMAIL_USER;
const emailPass = import.meta.env.VITE_EMAIL_PASS;



export const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de envio do formulário
  };

  return (
    <section className="w-full min-h-[400px] bg-[#B51C7A] flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-10 relative overflow-hidden">
      {/* X decorativo canto superior esquerdo */}
      <img src={vectorx} alt="decorativo" className="absolute left-0 top-0 w-16 md:w-24" style={{zIndex:1}} />
      {/* X decorativo canto inferior direito */}
      <img src={vectorx} alt="decorativo" className="absolute right-0 bottom-0 w-16 md:w-24 rotate-180" style={{zIndex:1}} />
      <div className="flex-1 z-10 max-w-xl">
        <p className="text-verde-primario text-xs md:text-sm font-bold mb-2 mt-2">
          Tem uma dúvida, quer colaborar ou contar sua história de adoção? Escreve pra gente!
        </p>
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-6">Junte-se a essa corrente do bem</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <div className="flex flex-col md:flex-row gap-4">
            <InputField label="Nome:" name="nome" placeholder="Nome completo" register={() => ({})} />
            <InputField label="E-mail:" name="email" type="email" placeholder="Email@gmail.com" register={() => ({})} />
          </div>
          <InputField label="Assunto:" name="assunto" placeholder="Sua mensagem" register={() => ({})} />
          <div className="flex gap-4 mt-4">
            <div className="w-1/2">
              <button type='reset' className="w-full bg-white border border-gray-300 text-gray-700 font-medium text-sm py-2 px-4 rounded-md mt-5">Cancelar</button>
            </div>
            <div className="w-1/2">
              <SubmitButton label="Enviar" bgColor="verde-primario" />
            </div>
          </div>
        </form>
      </div>
      <div className="flex-1 flex justify-center items-center z-10 mt-8 md:mt-0">
        <img src={Abraco} alt="Pessoa abraçando cachorro" className="rounded-lg shadow-lg w-72 md:w-96 object-cover" />
      </div>
    </section>
  );
};
