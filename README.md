# 🐾 ConectaPet - Frontend

<div align="right">
  
  [![Portuguese](https://img.shields.io/badge/lang-pt--BR-green.svg)](README.md)
  [![English](https://img.shields.io/badge/lang-en-red.svg)](README.en.md)
  
</div>

## 📋 Sobre o Projeto

ConectaPet é uma plataforma web desenvolvida para facilitar a adoção responsável de animais, conectando pessoas interessadas em adotar com ONGs e protetores independentes. Este projeto foi criado como trabalho de conclusão do curso Geração Tech 2.0, aplicando conceitos modernos de desenvolvimento web.

### ✨ Principais Funcionalidades

- 🔍 **Busca e Filtros Avançados**: Encontre o pet ideal através de filtros por espécie, idade, porte e localização
- 👤 **Perfis de Usuário**: Sistema com diferentes tipos de conta (Adotante e Guardião)
- 🐶 **Gerenciamento de Pets**: Guardiões podem cadastrar, editar e gerenciar pets para adoção
- 📝 **Processo de Adoção**: Formulário estruturado para solicitações de adoção
- 🏢 **Parceria com ONGs**: Listagem e informações sobre organizações parceiras
- 🔐 **Autenticação Segura**: Sistema de login com JWT e verificação de e-mail
- 📱 **Design Responsivo**: Interface adaptada para dispositivos móveis e desktop
- ✉️ **Notificações por E-mail**: Envio automático de e-mails através do EmailJS

## 🚀 Tecnologias Utilizadas

### Core

- **[React 18](https://react.dev/)** - Biblioteca JavaScript para construção de interfaces de usuário
- **[Vite](https://vitejs.dev/)** - Build tool moderna e ultrarrápida
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitário para estilização

### Gerenciamento de Estado e Roteamento

- **[React Router DOM](https://reactrouter.com/)** - Roteamento declarativo para React
- **[Context API](https://react.dev/reference/react/useContext)** - Gerenciamento de estado global

### Formulários e Validação

- **[React Hook Form](https://react-hook-form.com/)** - Gerenciamento performático de formulários
- **Validações Customizadas** - Sistema próprio de validação de dados

### Comunicação e APIs

- **[Axios](https://axios-http.com/)** - Cliente HTTP para requisições
- **[JWT Decode](https://www.npmjs.com/package/jwt-decode)** - Decodificação de tokens JWT
- **[EmailJS](https://www.emailjs.com/)** - Serviço de envio de e-mails

### UI/UX

- **[React Icons](https://react-icons.github.io/react-icons/)** - Biblioteca de ícones
- **[React Hot Toast](https://react-hot-toast.com/)** - Notificações toast elegantes
- **[React Modal](https://github.com/reactjs/react-modal)** - Modais acessíveis
- **[Swiper](https://swiperjs.com/)** - Carrossel moderno e touch-friendly

### Qualidade de Código e Testes

- **[ESLint](https://eslint.org/)** - Linting e padronização de código
- **[Cypress](https://www.cypress.io/)** - Framework de testes E2E (>80% de cobertura)

### DevOps

- **[Docker](https://www.docker.com/)** - Containerização da aplicação
- **[Vercel](https://vercel.com/)** - Plataforma de deploy

### Links Importantes

- 🐳 **Docker Hub**: [flaviare1s/conectapet-front](https://hub.docker.com/repository/docker/flaviare1s/conectapet-front/general)
- 🔗 **Backend Repository**: [conectapet-back](https://github.com/flaviare1s/conectapet-back)

## 🔧 Backend

A aplicação se comunica com um backend desenvolvido separadamente. É necessário que o backend esteja em execução (local ou hospedado) para o funcionamento completo do frontend.

> 🔗 **Repositório do Backend**: [https://github.com/flaviare1s/conectapet-back](https://github.com/flaviare1s/conectapet-back)

## 💻 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 16 ou superior)
- **npm** ou **yarn**
- **Git**

## 🛠️ Instalação e Execução

### 1️⃣ Clone o Repositório

```bash
# Navegue até a pasta desejada
cd Documents/

# Clone o projeto
git clone https://github.com/flaviare1s/conectapet-front.git

# Acesse o diretório
cd conectapet-front
```

### 2️⃣ Instale as Dependências

```bash
npm install
```

### 3️⃣ Configure as Variáveis de Ambiente

```bash
# Copie o arquivo de exemplo
cp .env.example .env
```

Edite o arquivo `.env` com suas credenciais do EmailJS (opcional):

````env
VIT🌐 Deploy

A aplicação está disponível em produção:

🔗 **[https://conectapet-front.vercel.app/](https://conectapet-front.vercel.app/)**

## 🧪 Testes

O projeto possui uma suíte de testes E2E desenvolvida com Cypress, cobrindo mais de **80%** dos arquivos.

### Executar Testes

```bash
# Abra o Cypress Test Runner
npm run cypress

# Execute os testes em modo headless
npm run cypress:headless
````

### Branch de Testes

Os testes estão disponíveis na branch: `tests`

```bash
git checkout tests
```

## 📁 Estrutura do Projeto

```
conectapet-front/
├── public/              # Arquivos estáticos
├── server/              # Mock server (desenvolvimento)
├── src/
│   ├── api/            # Módulos de comunicação com API
│   ├── assets/         # Imagens e recursos
│   ├── components/     # Componentes React reutilizáveis
│   ├── contexts/       # Context API (AuthContext)
│   ├── hooks/          # Custom hooks
│   ├── pages/          # Componentes de páginas
│   ├── services/       # Configuração de serviços
│   ├── utils/          # Funções utilitárias
│   ├── App.jsx         # Componente principal
│   └── main.jsx        # Entry point
├── .env.example        # Exemplo de variáveis de ambiente
├── Dockerfile          # Configuração Docker
└── package.json        # Dependências e scripts
```

## 📜 Scripts Disponíveis

```bash
npm run dev          # Inicia o servidor de desenvolvimento
npm run build        # Build de produção
npm run preview      # Preview do build de produção
npm run lint         # Executa o linter
npm run cypress      # Abre o Cypress Test Runner
```

## 👥 Equipe de Desenvolvimento

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/AndreFMoura11">
        <img src="https://github.com/AndreFMoura11.png" width="100px;" alt="André"/><br>
        <sub><b>André Moura</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/flaviare1s">
        <img src="https://github.com/flaviare1s.png" width="100px;" alt="Flávia"/><br>
        <sub><b>Flávia Reis</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/1uc-dev">
        <img src="https://github.com/1uc-dev.png" width="100px;" alt="Lucas"/><br>
        <sub><b>Lucas</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/olavoVieira">
        <img src="https://github.com/olavoVieira.png" width="100px;" alt="Olavo"/><br>
        <sub><b>Olavo Vieira</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/pallomadvm">
        <img src="https://github.com/pallomadvm.png" width="100px;" alt="Palloma"/><br>
        <sub><b>Palloma</b></sub>
      </a>
    </td>
  </tr>
</table>

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais como parte do curso Geração Tech 2.0.

---

<div align="center">
  Desenvolvido pela equipe ConectaPet
</div>

Acesse a aplicação em: **http://localhost:5173**

## 🐳 Executando com Docker

```bash
# Build da imagem
docker build -t conectapet-front .

# Execute o container
docker run -p 5173:5173 conectapet-front
```

Ou use a imagem do Docker Hub:

```bash
docker pull flaviare1s/conectapet-front
docker run -p 5173:5173 flaviare1s/conectapet-front
```

## Link do Deploy

🔗 [https://conectapet-front.vercel.app/](https://conectapet-front.vercel.app/)

## Testes

Os testes foram feitos com **Cypress**, com mais de 80% de cobertura em todos os arquivos.

### Branch de testes:

`tests`

### Comando para executar os testes com Cypress:

```bash
npm run cypress
```

## Equipe de desenvolvimento:

- [André](https://github.com/AndreFMoura11)
- [Flávia](https://github.com/flaviare1s)
- [Lucas](https://github.com/1uc-dev)
- [Olavo](https://github.com/olavoVieira)
- [Palloma](https://github.com/pallomadvm)
