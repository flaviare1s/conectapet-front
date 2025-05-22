import Abraco from '../assets/contact/card-abraço.png';
import vectorx from '../assets/contact/vectorx.png';
import { useForm } from 'react-hook-form';

// Acessando as variáveis no React usando import.meta.env.
const emailUser = import.meta.env.VITE_EMAIL_USER;
const emailPass = import.meta.env.VITE_EMAIL_PASS;

export const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Dados do formulário:', data);
    // Aqui você pode integrar com EmailJS ou outro serviço
    reset();
  };

  return (
    <section className="w-full min-h-[400px] bg-rosa-forte grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-between px-4 md:px-20 py-10 relative overflow-hidden">
      {/* X decorativo canto inferior esquerdo */}
      <img src={vectorx} alt="decorativo" className="absolute left-0 bottom-8 w-10 md:w-16" style={{zIndex:1}} />
      {/* X decorativo canto inferior direito */}
      <img src={vectorx} alt="decorativo" className="absolute right-6 bottom-8 w-16 md:w-20 rotate-180" style={{zIndex:1}} /> 
      <div className="flex-1 z-10 max-w-xl">
        <p className="text-verde-vibrante text-xs md:text-sm font-bold mb-2 mt-2">
          Tem uma dúvida, quer colaborar ou contar sua história de adoção? Escreve pra gente!
        </p>
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-2">Junte-se a essa corrente do bem</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <div className="flex flex-col w-full my-2">
              <label htmlFor="nome" className="text-sm font-medium mb-1 text-white">Nome:</label>
              <input
                type="text"
                id="nome"
                {...register('nome', { required: 'Nome obrigatório' })}
                placeholder="Nome completo"
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-verde-primario placeholder:text-sm bg-white"
              />
              {errors.nome && <small className="text-white mt-1">{errors.nome.message}</small>}
            </div>
            <div className="flex flex-col w-full my-2">
              <label htmlFor="email" className="text-sm font-medium mb-1 text-white">E-mail:</label>
              <input
                type="email"
                id="email"
                {...register('email', {
                  required: 'E-mail obrigatório',
                  pattern: {
                    value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                    message: 'E-mail inválido',
                  },
                })}
                placeholder="Email@gmail.com"
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-verde-primario placeholder:text-sm bg-white"
              />
              {errors.email && <small className="text-white mt-1">{errors.email.message}</small>}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="assunto" className="text-white text-sm font-medium mb-1">Assunto:</label>
            <textarea
              id="assunto"
              {...register('assunto', { required: 'Mensagem obrigatória' })}
              placeholder="Sua mensagem"
              rows={4}
              className="bg-white border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-verde-primario placeholder:text-sm w-full resize-none"
            ></textarea>
            {errors.assunto && <small className="text-white mt-1">{errors.assunto.message}</small>}
          </div>
          <div className="flex gap-4 mt-4">
            <div className="w-full">
              <button
                type="submit"
                className="w-full bg-verde-primario text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-verde-escuro transition-colors duration-300"
              >
                Enviar
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="flex-1 flex justify-center items-center z-10 mt-8 md:mt-0">
        <img src={Abraco} alt="Pessoa abraçando cachorro" />
      </div>
    </section>
  );
};
 