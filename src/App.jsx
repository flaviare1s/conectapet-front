import { Route, Routes } from "react-router-dom";
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
import { AdoptionListByPet } from "./components/AdoptionListByPet";
import { RedirectHome } from "./components/RedirectHome";
import { ScrollToTop } from "./components/ScrollToTop";
import { useAuth } from "./contexts/AuthContext";
import { EmailVerificationModal } from "./pages/EmailVerificationModal";

function App() {
  const { user } = useAuth();
  const [loadingApp, setLoadingApp] = useState(true);

  useEffect(() => {
    setLoadingApp(false);
  }, []);

  if (loadingApp) {
    return <Loader />;
  }

  return (
    <div className="font-inter flex flex-col min-h-screen overflow-x-hidden">
      <ScrollToTop />
      <Header user={user} />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<RedirectHome />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SelectAccountType />} />
          <Route path="/signup/verification" element={<EmailVerificationModal />} />
          <Route path="/signup/user" element={<UserRegister />} />
          <Route path="/signup/guardian" element={<GuardianRegister />} />
          <Route path="/pets" element={<Pets />} />
          <Route path="/pets/:id" element={<PetProfile />} />
          <Route path="/pets/add" element={<PrivateRoute><PetRegister /></PrivateRoute>} />
          <Route path="/mypets" element={<PrivateRoute><MyPets /></PrivateRoute>} />
          <Route path="/mypets/edit/:id" element={<PrivateRoute><PetEdit /></PrivateRoute>} />
          <Route path="/mypets/adoptions/:petId" element={<PrivateRoute><AdoptionListByPet /></PrivateRoute>} />
          <Route path="/ongs" element={<ONGs />} />
          <Route path="/pets/adopt/:petId" element={<AdoptionForm />} />
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
