import { Link } from 'react-router-dom';
import Dog from '../assets/about/blackdog-mobile.png'
import DogDesktop from '../assets/about/blackdog-desktop.png'

export const AboutSection = () => {
  return (
    <div className="bg-rosa-forte flex flex-col md:flex-row-reverse justify-center items-center p-6 md:p-10 lg:px-20 gap-15">
      <div className='max-w-[500px]'>
        <h2 className="text-verde-vibrante">Sobre nós:</h2>
        <h1 className="text-branco text-3x1 py-2">ConectaPet</h1>
        <div className='items-center justify-center flex flex-col'>
          <p className="text-branco">Somos uma ponte entre animais resgatados e pessoas dispostas a amar. No ConectaPet, você encontra pets que precisam de um lar seguro, afetuoso e responsável. Juntos, podemos transformar histórias e espalhar mais amor pelo mundo – um pet de cada vez.</p>
          <div className='bg-verde-primario w-[230px] h-[40px] flex items-center justify-center text-sm font-medium rounded-md mt-4'>
            <Link to="/about" className='text-preto'>Conheça Nossa Missão</Link>
          </div>
        </div>
      </div>
      <div className='mt-20 mb-0 relative flex items-center justify-center'>
        <div className='absolute w-40 h-40 sm:w-52 sm:h-52 md:w-72 md:h-72 bg-roxo-fucsia rounded-full z-0' />
        <picture>
          <source srcSet={DogDesktop} media='(min-width: 1000px)' />
          <img src={Dog} alt="Dog Black" className='mb-0 relative z-10'/>
        </picture>
      </div>
    </div>
  )
}
