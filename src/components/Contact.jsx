import Abraco from '../assets/contact/card-abraço.png';
import vectorx from '../assets/contact/vectorx.png';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';


export const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      toast.success('Mensagem enviada com sucesso!');
      reset();
    } catch (error) {
      console.error('Erro ao enviar o e-mail:', error);
      toast.error('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
    }
  };

  return (
    <section className="w-full min-h-[400px] bg-rosa-forte grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-between px-4 md:px-22 py-10 relative overflow-hidden">
      {/* X decorativo canto inferior esquerdo */}
      <img src={vectorx} alt="decorativo" className="absolute left-2 bottom-8 w-10 md:w-16" style={{zIndex:1}} />
      {/* X decorativo canto inferior direito */}
      <img src={vectorx} alt="decorativo" className="absolute right-26 bottom-8 w-16 md:w-16 rotate-180" style={{zIndex:1}} /> 
      <div className="flex-1 z-10 max-w-xl">
        <p className="text-verde-vibrante text-xs md:text-sm font-bold mb-2 mt-2">
          Tem uma dúvida, quer colaborar ou contar sua história de adoção? Escreve pra gente!
        </p>
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-2">Junte-se a essa corrente do bem</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <div className="flex flex-col w-full my-2">
              <label htmlFor="from_name" className="text-sm font-medium mb-1 text-white">Nome:</label>
              <input
                type="text"
                id="from_name"
                {...register('from_name', { required: 'Nome obrigatório' })}
                placeholder="Nome completo"
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-verde-primario placeholder:text-sm bg-white"
              />
              {errors.from_name && <small className="text-white mt-1">{errors.from_name.message}</small>}
            </div>
            <div className="flex flex-col w-full my-2">
              <label htmlFor="reply_to" className="text-sm font-medium mb-1 text-white">E-mail:</label>
              <input
                type="email"
                id="reply_to"
                {...register('reply_to', {
                  required: 'E-mail obrigatório',
                  pattern: {
                    value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                    message: 'E-mail inválido',
                  },
                })}
                placeholder="Email@gmail.com"
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-verde-primario placeholder:text-sm bg-white"
              />
              {errors.reply_to && <small className="text-white mt-1">{errors.reply_to.message}</small>}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-white text-sm font-medium mb-1">Assunto:</label>
            <textarea
              id="message"
              {...register('message', { required: 'Mensagem obrigatória' })}
              placeholder="Sua mensagem"
              rows={4}
              className="bg-white border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-verde-primario placeholder:text-sm w-full resize-none"
            ></textarea>
            {errors.message && <small className="text-white mt-1">{errors.message.message}</small>}
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
