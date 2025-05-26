# ConectaPet

## Visão Geral:
Esta aplicação foi desenvolvida como projeto de conclusão do curso, com o objetivo de aplicar na prática os conhecimentos adquiridos ao longo da formação.
A proposta consiste em um site de adoção de animais que conta com a parceria de ONGs, facilitando a conexão entre pets resgatados e pessoas interessadas em adotar com responsabilidade.
O projeto foca na experiência do usuário, na responsividade e na integração com dados simulados por meio de uma API fake, além de utilizar tecnologias modernas do ecossistema JavaScript.

## Tecnologias utilizadas:
- **React 19** – Biblioteca JavaScript para construção da interface.
- **Tailwind CSS** – Framework de estilos utilitários para criação de interfaces responsivas e modernas.
- **Vite** – Ferramenta de build e desenvolvimento ultrarrápida.
- **Axios** – Cliente HTTP para comunicação com APIs.
- **JSON Server** – API REST falsa para simulação de backend durante o desenvolvimento.
- **EmailJS** – Serviço de envio de e-mails direto do frontend.
- **dotenv** – Carrega variáveis de ambiente a partir de um arquivo .env.

## Como executar localmente:
1. Abra o Git Bash ou terminal e vá até a pasta desejada: (cd Documents/)
2. Clone o projeto na sua máquina utilizando o comando: (git clone https://github.com/flaviare1s/conectapet-front.git)
3. Acesse o diretório com do projeto: (cd conectapet-front)
4. Abra o Visual Studio Code (ou o editor de sua preferência): (code .)
5. Instale as dependências: (npm install)
6. Renomeie o arquivo de exemplo de dados: (mv server/db.example.json server/db.json)
7. Renomeie o arquivo de variáveis de ambiente de exemplo: (mv .env.example .env)
8. Edite o arquivo .env com suas chaves reais do EmailJS caso deseje usar o envio de e-mails. Caso contrário, pode manter os valores como estão no .env.example.
9. Inicie o JSON Server: (npm run server)
10. Em um novo terminal, inicie o projeto: (npm run dev)
11. Acesse o link gerado no terminal (geralmente http://localhost:5173) com Ctrl + click

## Link para acessar site: https://conectapet-front.vercel.app/

## Equipe de desenvolvimento:
- [André](https://github.com/AndreFMoura11)
- [Caio](https://github.com/Caiovictor14)
- [Flávia](https://github.com/flaviare1s)
- [Lucas](https://github.com/1uc-dev)
- [Olavo](https://github.com/olavoVieira)
- [Palloma](https://github.com/pallomadvm)
