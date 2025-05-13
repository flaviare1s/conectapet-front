import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Login } from "./pages/Login";
import { UserRegister } from "./pages/UserRegister";
import { GuardianRegister } from "./pages/GuardianRegister";
import { Pets } from "./pages/Pets";
import { PetRegister } from "./pages/PetRegister";
import { PetEdit } from "./pages/PetEdit";
import { NotFound } from "./pages/NotFound";
import { ONGs } from "./pages/ONGs";
import { Congratulations } from "./pages/Congratulations";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { SelectAccountType } from "./pages/SelectAccountType";
import { PetProfile } from "./pages/PetProfile";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { MyPets } from "./pages/MyPets";

import { useState } from "react";
import { PrivateRoute } from "./components/PrivateRoute";
import { Forbidden } from "./pages/Forbidden";

function App() {
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="font-inter flex flex-col min-h-screen">
      <Header user={user} onLogout={handleLogout} />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SelectAccountType />} />
          <Route path="/signup/user" element={<UserRegister />} />
          <Route path="/signup/guardian" element={<GuardianRegister />} />
          <Route path="/pets" element={<Pets />} />
          <Route path="/pets/:id" element={<PetProfile />} />
          <Route path="/pets/add" element={<PrivateRoute element={<PetRegister />} />} />
          <Route path="/mypets" element={<PrivateRoute element={<MyPets />} />} />
          <Route path="/mypets/edit/:id" element={<PrivateRoute element={<PetEdit />} />} />
          <Route path="/ongs" element={<ONGs />} />
          <Route path="/congratulations" element={<Congratulations />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/forbidden" element={<NotFound />} />
          <Route path="*" element={<Forbidden />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
