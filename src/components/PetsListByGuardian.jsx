import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPetsByGuardianId } from "../api/pets";
import { Loader } from "./Loader";
import { PetCardByGuardian } from "./PetCardByGuardian";

export const PetsListByGuardian = ({ guardianId }) => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if(!guardianId) {
      setLoading(false);
      return
    }
    const fetchPetsByGuardian = async () => {
      try {
        const result = await getPetsByGuardianId(guardianId);
        setPets(result);
      } catch (error) {
        console.error("Erro ao buscar pets: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPetsByGuardian();
  }, [guardianId]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="p-6 md:p-10 lg:px-20 bg-purple-50 w-screen">
      <div className="flex items-center justify-between mb-5 xl:px-16">
        <h2 className="font-bold text-sm sm:text-base md:text-xl">Meus peludinhos:</h2>
        <nav>
          <Link className="bg-roxo-primario text-white hover:bg-rosa-forte rounded-md py-2 px-2 sm:px-6 text-xs font-bold" to="/pets/add">Novo pet</Link>
        </nav>
      </div>
      <div className="flex flex-col justify-center items-center">
        {pets.length === 0 && <p className="text-red-600 h-[60vh]">Nenhum pet cadastrado!</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {pets.map((pet) => (
            <PetCardByGuardian key={pet.id} pet={pet} />
          ))}
        </div>
      </div>
    </div>
  );
};
