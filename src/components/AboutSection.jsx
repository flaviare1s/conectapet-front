import { Link } from 'react-router-dom';
import Dog from '../assets/about/blackdog-mobile.png'

export const AboutSection = () => {
  return (
    <div className="bg-rosa-forte md:w-376px md:h-740px">
      <div>
        <h2 className="text-verde-vibrante">Sobre nós</h2>
        <h1 className="text-branco">ConectaPet</h1>
        <p className="text-branco">Somos uma ponte entre animais resgatados e pessoas dispostas a amar. No ConectaPet, você encontra pets que precisam de um lar seguro, afetuoso e responsável. Juntos, podemos transformar histórias e espalhar mais amor pelo mundo – um pet de cada vez.</p>
      </div>
      <div className='bg-verde-primario'>
        <Link to="/about" className='text-preto'>Conheça Nossa Missão</Link>
      </div>
      <div>
        <img src={Dog} alt="Dog Black" />
      </div>
    </div>
  )
}
