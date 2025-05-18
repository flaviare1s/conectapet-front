import { Link } from 'react-router-dom';
import Dog from '../assets/about/blackdog-mobile.png'
export const AboutSection = () => {
  return (
    <div className="bg-rosa-forte flex flex-col lg:flex-row-reverse justify-center items-center lg:gap-15 lg:pt-10">
      <div className='max-w-[500px] flex flex-col p-5'>
        <h2 className="text-verde-vibrante font-semibold text-lg">Sobre nós:</h2>
        <h1 className="text-branco text-2xl sm:text-4xl py-2 font-bold">ConectaPet</h1>
        <div className='flex flex-col justify-center'>
          <p className="text-branco">Somos uma ponte entre animais resgatados e pessoas dispostas a amar. No ConectaPet, você encontra pets que precisam de um lar seguro, afetuoso e responsável. Juntos, podemos transformar histórias e espalhar mais amor pelo mundo – um pet de cada vez.</p>
          <div className='bg-verde-primario hover:bg-verde-escuro w-[230px] h-[40px] flex items-center justify-center text-sm font-medium rounded-md mt-5'>
            <Link to="/about" className='text-preto'>Conheça Nossa Missão</Link>
          </div>
        </div>
      </div>
      <div className='mt-5 mb-0 relative flex items-center justify-center'>
        <picture>
          <img src={Dog} alt="Dog Black" className='w-[300px] sm:w-[400px]'/>
        </picture>
      </div>
    </div>
  )
}
