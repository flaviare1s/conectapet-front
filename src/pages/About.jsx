import { VscAccount } from "react-icons/vsc";
import { RiImageCircleLine } from "react-icons/ri";
import { SiGoogleforms } from "react-icons/si";
import ReturnButton from "../components/ReturnButton";

export const About = () => {
  return (
    <div className="flex flex-col flex-grow items-center justify-center mb-15 max-w-[1200px] mx-auto">
      <div className="self-end pr-6">
        <ReturnButton />
      </div>
        <div className="flex flex-col flex-grow items-center justify-center ">
          <h1 className="text-verde-primario text-center text-2xl md:text-5xl p-4 pb-6 font-bold">Nossa missão</h1>
          <p className="md:text-2xl text-justify px-10 pb-3">
            No <strong className="md:text-3xl text-roxo-primario">ConectaPet</strong>, acreditamos que todo animal merece amor, cuidado e um lar seguro. Nossa missão é ser a ponte entre animais resgatados e pessoas dispostas a oferecer uma nova chance para quem já sofreu demais. Mais do que um site, somos um movimento de empatia, responsabilidade e esperança.
          </p>
          <p className="md:text-2xl text-justify px-10 pb-3">
            Sabemos que cada pet tem uma história única — alguns foram abandonados, outros resgatados de situações difíceis. Mas todos têm em comum o desejo por algo simples: um lar onde possam se sentir protegidos, valorizados e amados. É por isso que trabalhamos todos os dias para conectar esses animais a pessoas que queiram fazer a diferença.
          </p>
          <p className="md:text-2xl text-justify px-10 pb-3">
            Ao adotar um pet pelo <strong className="md:text-3xl text-roxo-primario">ConectaPet</strong>, você não está apenas ganhando um amigo fiel — está escrevendo um novo capítulo na vida de um ser que só precisava de uma chance. Ao mesmo tempo, está transformando sua própria história com mais afeto, companheirismo e alegria.
          </p>
          <p className="md:text-2xl text-justify px-10 pb-10">
            Junte-se a nós nessa jornada de transformação. Um pet adotado pode não mudar o mundo inteiro,mas com certeza muda o mundo de alguém — inclusive o seu.
          </p>
        </div>
        {/* Cadastro */}
        <div className="w-full max-w-2xl flex items-center justify-center flex-col">
          <h2 className="text-center text-verde-primario md:text-4xl p-5 font-bold">Passo a passo cadastro 🐾</h2>
          <h3 className="text-left md:text-3xl py-4 text-roxo-primario font-bold">Quero Adotar</h3>
          <ul className="text-left md:text-xl">
            <li className="mb-10">
              <div className="flex items-center gap-2">
                <VscAccount className="text-verde-primario text-5xl pl-3"/>
                <h4 className="font-bold">Crie um cadastro</h4>
              </div>
              <ul className="list-disc list-outside px-10 text-left md:text-xl mx-auto">
                <li>Na barra de navegação, escolha a opção <span className="text-verde-primario">"Cadastre-se"</span>.</li>
                <li>Escolha o tipo de cadastro <span className="text-roxo-primario">"Quero adotar"</span>.</li>
                <li>Preencha os campos com nome, email e senha (no mínimo 6 dígitos).</li>

              </ul>
            </li>
            <li className="mb-10">
              <div className="flex items-center gap-2">
                <RiImageCircleLine className="text-verde-primario text-5xl pl-3"/>
                <h4 className="font-bold">Galeria de Pets</h4>
              </div>
              <ul className="list-disc list-outside px-10 text-left md:text-xl mx-auto">
                <li>Na barra de navegação, escolha a opção <span className="text-verde-primario">"Pets"</span>.</li>
                <li>Na <span className="text-verde-primario">"Galeria dos peludinhos"</span>, você encontrará várias opções de animais disponíveis para adoção. Fique atento ao status de adoção, exibido no canto superior esquerdo de cada card.</li>
                <li>Ao escolher um pet, você será direcionado para o perfil dele. O perfil do peludinho é preenchido com informações importantes sobre ele, assim você pode conhecer melhor seu novo amiguinho.</li>
                <li>Para continuar o processo de adoção, clique em <span className="text-roxo-primario">"Quero adotar"</span> e você será direcionado ao formulário. Após o envio, a instituição ou protetor responsável pelo pet analisará suas informações e entrará em contato com você.</li>
              </ul>
            </li>
            <li className="mb-10">
              <div className="flex items-center gap-2">
                <SiGoogleforms  className="text-verde-primario text-5xl pl-3"/>
                <h4 className="font-bold">Formulário</h4>
              </div>
              <p className="p-10 py-5 text-justify">
                Nosso formulário foi desenvolvido para tornar o processo de adoção simples, rápido e seguro. Ao preencher seus dados corretamente, você nos ajuda a garantir que cada pet encontre o lar ideal. É através desse formulário que conectamos amor, responsabilidade e novas histórias. Preencha com carinho — cada informação faz a diferença na vida de um animal resgatado. 
              </p>
            </li>
          </ul>
        </div>
    </div>
  )
}