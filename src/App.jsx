import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Login } from "./pages/Login"
import { UserRegister } from "./pages/UserRegister"
import { GuardianRegister } from "./pages/GuardianRegister"
import { Pets } from "./pages/Pets"
import { PetCard } from "./pages/PetCard"
import { PetRegister } from "./pages/PetRegister"
import { PetEdit } from "./pages/PetEdit"
import { NotFound } from "./pages/NotFound"
import { ONGs } from "./pages/ONGs"
import { Congratulations } from "./pages/Congratulations"
import { SelectAccountType } from "./pages/SelectAccountType"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SelectAccountType />} />
          <Route path="/signup/user" element={<UserRegister />} />
          <Route path="/signup/guardian" element={<GuardianRegister />} />
          <Route path="/pets" element={<Pets />} />
          <Route path="/pets/:id" element={<PetCard />} />
          <Route path="/pets/add" element={<PetRegister />} />
          <Route path="/pets/edit" element={<PetEdit />} />
          <Route path='/ongs' element={<ONGs />} />
          <Route path='/congratulations' element={<Congratulations />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
