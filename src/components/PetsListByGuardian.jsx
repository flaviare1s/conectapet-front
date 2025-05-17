import { Link } from "react-router-dom";
import { PetCard } from "./PetCard";
import { useEffect, useState } from "react";
import { getPetsByGuardianId } from "../api/pets";
import { Loader } from "./Loader";

export const PetsListByGuardian = ({ guardianId, showDescricao = true }) => {
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
        console.log("result", result);
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
    <div className="p-6 md:p-10 lg:px-20 bg-purple-50">
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-bold md:text-xl">Galeria dos peludinhos:</h2>

        <Link className="text-roxo-primario hover:underline" to="/">
          Voltar
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {pets.map((pet) => (
            <PetCard key={pet.id} pet={pet} showDescricao={showDescricao} />
          ))}
        </div>
      </div>
    </div>
  );
};
