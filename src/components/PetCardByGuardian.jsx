import { FiEdit, FiTrash2 } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { deletePet } from "../api/pets";
import toast from "react-hot-toast";
import { AiOutlineEye } from "react-icons/ai";
import { useEffect, useState } from "react";
import { getAdoptionsByPetId } from "../api/adoptions";
import { FaWpforms } from "react-icons/fa";

export const PetCardByGuardian = ({ pet }) => {
  const navigate = useNavigate();
  const [adoption, setAdoption] = useState(null);

  useEffect(() => {
    const fetchAdoption = async () => {
      try {
        const response = await getAdoptionsByPetId(pet.id);
        const match = response.find((a) => a.petId === pet.id);
        setAdoption(match || null);
      } catch (error) {
        console.error("Erro ao buscar adoções", error);
      }
    };
    fetchAdoption();
  }, [pet.id]);

  const removerPet = async () => {
    const confirmDelete = window.confirm("Tem certeza de que deseja remover?");
    if(confirmDelete) {
      try {
        await deletePet(pet.id);
        navigate(0);
      } catch (error) {
        console.error("Erro ao remover pet: ", error);
        toast.error("Erro ao remover pet");
      }
    }
  }

  const statusClasses = {
    "Coração livre!": "bg-verde-primario text-black font-bold",
    "Quase lá!": "bg-yellow-300 text-black font-bold",
    "Final feliz!": "bg-roxo-primario text-white font-bold",
  };

  const badgeClass = statusClasses[pet.status] || "bg-transparent";

  return (
    <div className="rounded p-4 shadow-md bg-white max-w-[300px]">
      <div className="relative">
        <div
          className={`absolute top-2 left-2 text-xs px-2 py-1 rounded-full ${badgeClass}`}
        >
          {pet.status}
        </div>
        <img
          src={pet.imagemUrl}
          alt={`Foto de ${pet.nome}`}
          className="w-full h-[200px] object-cover rounded"
        />
      </div>
      <div className="mt-3">
        <small className="text-xs text-cinza capitalize">{pet.tipo}</small>
        <div className="font-medium text-lg">
          <span>{pet.nome}</span> - <span>{pet.idade}</span>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <span className="bg-[#8F8F8F] h-[1px] w-10"></span>
            <p className="text-sm text-cinza font-bold">{pet.guardian.nome}</p>
          </div>
          <div className="flex items-center justify-end gap-2">
            <Link to={`/pets/${pet.id}`}><AiOutlineEye className="text-yellow-600 text-2xl hover:text-yellow-800 mt-1" /></Link>
            <Link to={`/mypets/edit/${pet.id}`}><FiEdit
             className="text-verde-primario text-xl hover:text-verde-escuro" /></Link>
            <button onClick={removerPet} className="cursor-pointer"><FiTrash2 className="text-rosa-forte text-xl hover:text-roxo-primario" /></button>
            {adoption && (
              <Link to={`/mypets/adoptions/${pet.id}`} title="Ver formulários">
                <FaWpforms className="text-cinza text-xl hover:text-black" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
