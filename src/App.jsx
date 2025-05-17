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

import { useEffect, useState } from "react";
import { PrivateRoute } from "./components/PrivateRoute";
import { Forbidden } from "./pages/Forbidden";
import { Loader } from "./components/Loader";
import { AdoptionForm } from "./pages/AdoptionForm";

function App() {
  const [user, setUser] = useState(null);
  const [loadingApp, setLoadingApp] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoadingApp(false);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };


  if (loadingApp) {
    return (
      <Loader />
    );
  }

  return (
    <div className="font-inter flex flex-col min-h-screen overflow-x-hidden">
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
          <Route path="/pets/add" element={<PrivateRoute><PetRegister /></PrivateRoute>} />
          <Route path="/mypets" element={<PrivateRoute><MyPets /></PrivateRoute>} />
          <Route path="/mypets/edit/:id" element={<PrivateRoute><PetEdit /></PrivateRoute>} />
          <Route path="/ongs" element={<ONGs />} />
          <Route path="/pets/adopt/:id" element={<AdoptionForm />} />
          <Route path="/congratulations" element={<Congratulations />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/forbidden" element={<Forbidden />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
