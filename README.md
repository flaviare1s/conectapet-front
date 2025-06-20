# 🐾 ConectaPet - Frontend

## Visão Geral:
Esta aplicação foi desenvolvida como projeto de conclusão do curso Geração Tech 2.0, com o objetivo de aplicar na prática os conhecimentos adquiridos ao longo da formação.
A proposta consiste em um site de adoção de animais que conta com a parceria de ONGs, facilitando a conexão entre pets resgatados e pessoas interessadas em adotar com responsabilidade.
O projeto foca na experiência do usuário, na responsividade e na integração com dados simulados por meio de uma API fake, além de utilizar tecnologias modernas do ecossistema JavaScript.

## Tecnologias utilizadas:
### Frontend
- **React** – Biblioteca JavaScript para construção da interface.
- **Vite** – Ferramenta de build e desenvolvimento ultrarrápida.
- **Tailwind CSS** – Framework de estilos utilitários para criação de interfaces responsivas e modernas.
- **Axios** – Cliente HTTP para comunicação com APIs.
- **React Router DOM** – Roteamento e navegação entre páginas.
- **React Hook Form** – Gerenciamento e validação de formulários.
- **React Hot Toast** – Notificações toast para feedback ao usuário.
- **React Icons** – Biblioteca de ícones para React.
- **React Modal** – Criação de modais acessíveis.
- **React Burger Menu** – Menu lateral responsivo.
- **JWT Decode** – Decodificação de tokens JWT.
- **Swiper** – Carrossel responsivo.
- **ESLint** – Linter para padronização do código.
- **EmailJS** – Serviço de envio de e-mails direto do frontend.
- **Dotenv** – Carrega variáveis de ambiente a partir de um arquivo .env.
- **Cypress** – Testes end-to-end.
- **Docker** – Contêinerização e padronização do ambiente de desenvolvimento.

🔗 Link do Docker: https://hub.docker.com/repository/docker/flaviare1s/conectapet-front/general

### Backend
## Conecte com o Backend
- A aplicação agora se comunica com um backend real (desenvolvido separadamente), sendo necessário que ele esteja em execução local ou hospedado para o frontend funcionar corretamente.
> 🔗 Repositório do backend: [https://github.com/flaviare1s/conectapet-back](https://github.com/flaviare1s/conectapet-back)

## Como executar localmente:
1. Abra o Git Bash ou terminal e vá até a pasta desejada:
   ```
   cd Documents/
   ```

2. Clone o projeto na sua máquina utilizando o comando:
   ```
   git clone https://github.com/flaviare1s/conectapet-front.git
   ```

3. Acesse o diretório com do projeto:
   ```
   cd conectapet-front
   ```

4. Abra o Visual Studio Code (ou o editor de sua preferência):
   ```
   code .
   ```
   
5. Instale as dependências:
   ```
   npm install
   ```
   
6. Copie o arquivo `.env.example`, cole na raiz do projeto e renomeie-o para `.env`.

7. Configure o  arquivo `.env` com as variáveis adequadas do EmailJS, caso deseje usar o envio de e-mails. Caso contrário, mantenha os valores como estão no `.env.example`.

8. Inicie o projeto localmente:
   ```
   npm run dev
   ```
   
9. Acesse o projeto no navegador através do link gerado (geralmente ```http://localhost:5173```) com Ctrl + click.

- ⚠️ Certifique-se de que o backend esteja rodando antes de iniciar o frontend. A porta padrão esperada é a 3000.

## Link do Deploy

🔗 [https://conectapet-front.vercel.app/](https://conectapet-front.vercel.app/)

## Testes
Os testes foram feitos com **Cypress**, com mais de 80% de cobertura em todos os arquivos.

### Branch de testes:
```tests```

### Comando para executar os testes com Cypress:
```bash
npm run cypress
```

## Equipe de desenvolvimento:
- [André](https://github.com/AndreFMoura11)
- [Caio](https://github.com/Caiovictor14)
- [Flávia](https://github.com/flaviare1s)
- [Lucas](https://github.com/1uc-dev)
- [Olavo](https://github.com/olavoVieira)
- [Palloma](https://github.com/pallomadvm)
