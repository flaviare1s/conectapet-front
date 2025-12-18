# 🐾 ConectaPet - Frontend

<div align="right">
  
  [![Portuguese](https://img.shields.io/badge/lang-pt--BR-green.svg)](README.md)
  [![English](https://img.shields.io/badge/lang-en-red.svg)](README.en.md)
  
</div>

## 📋 About the Project

ConectaPet is a web platform developed to facilitate responsible pet adoption, connecting people interested in adopting with NGOs and independent guardians. This project was created as the final work for the Geração Tech 2.0 course, applying modern web development concepts.

### ✨ Main Features

- 🔍 **Advanced Search and Filters**: Find the ideal pet through filters by species, age, size, and location
- 👤 **User Profiles**: System with different account types (Adopter and Guardian)
- 🐶 **Pet Management**: Guardians can register, edit, and manage pets for adoption
- 📝 **Adoption Process**: Structured form for adoption requests
- 🏢 **Partnership with NGOs**: List and information about partner organizations
- 🔐 **Secure Authentication**: Login system with JWT and email verification
- 📱 **Responsive Design**: Interface adapted for mobile and desktop devices
- ✉️ **Email Notifications**: Automatic email sending through EmailJS

## 🚀 Technologies Used

### Core

- **[React 18](https://react.dev/)** - JavaScript library for building user interfaces
- **[Vite](https://vitejs.dev/)** - Modern and ultra-fast build tool
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework for styling

### State Management and Routing

- **[React Router DOM](https://reactrouter.com/)** - Declarative routing for React
- **[Context API](https://react.dev/reference/react/useContext)** - Global state management

### Forms and Validation

- **[React Hook Form](https://react-hook-form.com/)** - Performant form management
- **Custom Validations** - Custom data validation system

### Communication and APIs

- **[Axios](https://axios-http.com/)** - HTTP client for requests
- **[JWT Decode](https://www.npmjs.com/package/jwt-decode)** - JWT token decoding
- **[EmailJS](https://www.emailjs.com/)** - Email sending service

### UI/UX

- **[React Icons](https://react-icons.github.io/react-icons/)** - Icon library
- **[React Hot Toast](https://react-hot-toast.com/)** - Elegant toast notifications
- **[React Modal](https://github.com/reactjs/react-modal)** - Accessible modals
- **[Swiper](https://swiperjs.com/)** - Modern and touch-friendly carousel

### Code Quality and Testing

- **[ESLint](https://eslint.org/)** - Code linting and standardization
- **[Cypress](https://www.cypress.io/)** - E2E testing framework (>80% coverage)

### DevOps

- **[Docker](https://www.docker.com/)** - Application containerization
- **[Vercel](https://vercel.com/)** - Deployment platform

### Important Links

- 🐳 **Docker Hub**: [flaviare1s/conectapet-front](https://hub.docker.com/repository/docker/flaviare1s/conectapet-front/general)
- 🔗 **Backend Repository**: [conectapet-back](https://github.com/flaviare1s/conectapet-back)

## 🔧 Backend

The application communicates with a separately developed backend. The backend must be running (locally or hosted) for the frontend to work properly.

> 🔗 **Backend Repository**: [https://github.com/flaviare1s/conectapet-back](https://github.com/flaviare1s/conectapet-back)

## 💻 Prerequisites

Before starting, make sure you have installed:

- **Node.js** (version 16 or higher)
- **npm** or **yarn**
- **Git**

## 🛠️ Installation and Execution

### 1️⃣ Clone the Repository

```bash
# Navigate to the desired folder
cd Documents/

# Clone the project
git clone https://github.com/flaviare1s/conectapet-front.git

# Access the directory
cd conectapet-front
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Environment Variables

```bash
# Copy the example file
cp .env.example .env
```

Edit the `.env` file with your EmailJS credentials (optional):

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### 4️⃣ Run the Backend

⚠️ **Important**: The backend must be running before starting the frontend.

```bash
# Clone and run the backend following the instructions at:
# https://github.com/flaviare1s/conectapet-back
```

The backend should be running on port `3000`.

### 5️⃣ Start the Development Server

```bash
npm run dev
```

Access the application at: **http://localhost:5173**

## 🐳 Running with Docker

```bash
# Build the image
docker build -t conectapet-front .

# Run the container
docker run -p 5173:5173 conectapet-front
```

Or use the image from Docker Hub:

```bash
docker pull flaviare1s/conectapet-front
docker run -p 5173:5173 flaviare1s/conectapet-front
```

## 🌐 Deploy

The application is available in production:

🔗 **[https://conectapet-front.vercel.app/](https://conectapet-front.vercel.app/)**

## 🧪 Tests

The project has an E2E test suite developed with Cypress, covering more than **80%** of the files.

### Run Tests

```bash
# Open Cypress Test Runner
npm run cypress

# Run tests in headless mode
npm run cypress:headless
```

### Test Branch

Tests are available on the branch: `tests`

```bash
git checkout tests
```

## 📁 Project Structure

```
conectapet-front/
├── public/              # Static files
├── server/              # Mock server (development)
├── src/
│   ├── api/            # API communication modules
│   ├── assets/         # Images and resources
│   ├── components/     # Reusable React components
│   ├── contexts/       # Context API (AuthContext)
│   ├── hooks/          # Custom hooks
│   ├── pages/          # Page components
│   ├── services/       # Service configuration
│   ├── utils/          # Utility functions
│   ├── App.jsx         # Main component
│   └── main.jsx        # Entry point
├── .env.example        # Environment variables example
├── Dockerfile          # Docker configuration
└── package.json        # Dependencies and scripts
```

## 📜 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Production build
npm run preview      # Preview production build
npm run lint         # Run linter
npm run cypress      # Open Cypress Test Runner
```

## 👥 Development Team

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

## 📄 License

This project was developed for educational purposes as part of the Geração Tech 2.0 course.

---

<div align="center">
  Developed by the ConectaPet team
</div>
