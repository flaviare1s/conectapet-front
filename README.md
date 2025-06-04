# ConectaPet

## Visão Geral:
Esta aplicação foi desenvolvida como projeto de conclusão do curso, com o objetivo de aplicar na prática os conhecimentos adquiridos ao longo da formação.
A proposta consiste em um site de adoção de animais que conta com a parceria de ONGs, facilitando a conexão entre pets resgatados e pessoas interessadas em adotar com responsabilidade.
O projeto foca na experiência do usuário, na responsividade e na integração com dados simulados por meio de uma API fake, além de utilizar tecnologias modernas do ecossistema JavaScript.

## Tecnologias utilizadas:

### Frontend
- **React** – Biblioteca JavaScript para construção da interface.
- **Tailwind CSS** – Framework de estilos utilitários para criação de interfaces responsivas e modernas.
- **Vite** – Ferramenta de build e desenvolvimento ultrarrápida.
- **Axios** – Cliente HTTP para comunicação com APIs.
- **EmailJS** – Serviço de envio de e-mails direto do frontend.
- **dotenv** – Carrega variáveis de ambiente a partir de um arquivo .env.

### Backend
- A aplicação agora se comunica com um backend real (desenvolvido separadamente), sendo necessário que ele esteja em execução local ou hospedado para o frontend funcionar corretamente.
> 🔗 Repositório do backend: [https://github.com/flaviare1s/conectapet-back](https://github.com/flaviare1s/conectapet-back)

## Como executar localmente:
1. Abra o Git Bash ou terminal e vá até a pasta desejada:
   ```cd Documents/```
2. Clone o projeto na sua máquina utilizando o comando:
   ```git clone https://github.com/flaviare1s/conectapet-front.git```
3. Acesse o diretório com do projeto:
   ```cd conectapet-front```
4. Abra o Visual Studio Code (ou o editor de sua preferência):
   ```code .```
5. Instale as dependências:
   ```npm install```
6. Renomeie o arquivo de variáveis de ambiente de exemplo:
   ```mv .env.example .env```
7. Edite o arquivo .env com suas chaves reais do EmailJS caso deseje usar o envio de e-mails. Caso contrário, pode manter os valores como estão no .env.example.
8. Inicie o projeto localmente:
   ```npm run dev```
9. Acesse o projeto no navegador através do link gerado (geralmente ```http://localhost:5173```) com Ctrl + click

⚠️ Certifique-se de que o backend esteja rodando antes de iniciar o frontend. A porta padrão esperada é a 3000.

## Link do Deploy
🔗 https://conectapet-front.vercel.app/
(Versão publicada anteriormente usando JSON Server como API fake)

## Equipe de desenvolvimento:
- [André](https://github.com/AndreFMoura11)
- [Caio](https://github.com/Caiovictor14)
- [Flávia](https://github.com/flaviare1s)
- [Lucas](https://github.com/1uc-dev)
- [Olavo](https://github.com/olavoVieira)
- [Palloma](https://github.com/pallomadvm)