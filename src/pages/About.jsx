import { VscAccount } from "react-icons/vsc";
import { RiImageCircleLine } from "react-icons/ri";
import { SiGoogleforms } from "react-icons/si";

export const About = () => {
  return (
    <div className="flex flex-col flex-grow items-center justify-center my-15">
        <div className="flex flex-col flex-grow items-center justify-center">
          <h1 className="text-verde-primario text-5xl p-4"><strong>Nossa missão</strong></h1>
          <p className="text-2xl text-left px-10 pb-5">
            No <strong className="text-3xl text-roxo-primario">ConectaPet</strong>, acreditamos que todo animal merece amor, cuidado e um lar seguro. Nossa missão é ser a ponte entre animais resgatados e pessoas dispostas a oferecer uma nova chance para quem já sofreu demais. Mais do que um site, somos um movimento de empatia, responsabilidade e esperança.
          </p>
          <p className="text-2xl text-left px-10 pb-5">
            Sabemos que cada pet tem uma história única — alguns foram abandonados, outros resgatados de situações difíceis. Mas todos têm em comum o desejo por algo simples: um lar onde possam se sentir protegidos, valorizados e amados. É por isso que trabalhamos todos os dias para conectaresses animais a pessoas que queiram fazer a diferença.
          </p>
          <p className="text-2xl text-left px-10 pb-5">
            Ao adotar um pet pelo ConectaPet, você não está apenas ganhando um amigo fiel. Está escrevendo um novo capítulo na vida de um ser que só precisava de uma chance. E, ao mesmo tempo, está transformando sua própria história com mais afeto, companheirismo e alegria.
          </p>
          <p className="text-2xl text-left px-10 pb-5">
            Junte-se a nós nessa jornada de transformação. Um pet adotado pode não mudar o mundo inteiro,mas com certeza muda o mundo de alguém — inclusive o seu.
          </p>
        </div>
        {/* Cadastro */}
        <div className="w-full max-w-2xl flex items-center justify-center flex-col">
          <h2 className="text-center text-verde-primario text-4xl p-5"><strong>Passo a passo cadastro</strong>🐾</h2>
          <h3 className="text-left text-3xl py-4 text-roxo-primario"><strong>Quero Adotar</strong></h3>
          <ul className="text-left text-xl">
            <li className="mb-10">
              <div className="flex items-center gap-2">
                <VscAccount className="text-verde-primario text-5xl pl-3"/>
                <h4><strong>Crie um Cadastro</strong></h4>
              </div>
              <ul className="list-disc list-outside px-10 text-left text-xl mx-auto">
                <li>Na barra de navegação escolha a opção "Cadastre-se"</li>
                <li>Escolha o tipo de cadastro "Quero Adotar"</li>
                <li>Preencha com Nome, Email e Senha com no minimo 6 digitos</li>
                <li>CADASTRO REALIZADO COM SUCESSO</li>
              </ul>
            </li>
            <li className="mb-10">
              <div className="flex items-center gap-2">
                <RiImageCircleLine className="text-verde-primario text-5xl pl-3"/>
                <h4><strong>Galeria de Pets</strong></h4>
              </div>
              <ul className="list-disc list-outside px-10 text-left text-xl mx-auto">
                <li>Na barra de navegação escolha a opção "Pets".</li>
                <li>Na página Pets vai ter varias opções para adoção (Cuidado, no canto superior esquerdo tem o status de adoção).</li>
                <li>Ao escolher o pet que mais se apaixonou, vai ser direcionado para o perfil do pet.</li>
                <li>No perfil do pet você, vai conhecer melhor seu novo amiguinho.</li>
              </ul>
            </li>
            <li className="mb-10">
              <div className="flex items-center gap-2">
                <SiGoogleforms  className="text-verde-primario text-5xl pl-3"/>
                <h4><strong>Formulário</strong></h4>
              </div>
              <p className="p-10 py-5">
                Nosso formulário foi desenvolvido para tornar o processo de adoção simples, rápido e seguro. Ao preencher seus dados corretamente, você nos ajuda a garantir que cada pet encontre o lar ideal. É através desse formulário que conectamos amor, responsabilidade e novas histórias. Preencha com carinho — cada informação faz a diferença na vida de um animal resgatado. 🐾
              </p>
            </li>
          </ul>
        </div>
    </div>
  )
}