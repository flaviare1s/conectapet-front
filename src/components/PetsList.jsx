import { Link } from "react-router-dom";
import { PetCard } from "./PetCard";
import { useEffect, useState } from "react";
import { getPets } from "../api/pets";
import { Loader } from "./Loader";

export const PetsList = ({ limit, showDescricao = true, filters = {} }) => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const result = await getPets();
        setPets(result);
      } catch (error) {
        console.error("Erro ao buscar pets: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPets();
  }, []);

  if (loading) {
    return <Loader />;
  }

  const filteredPets = pets.filter((pet) => {
    return Object.entries(filters).every(([key, selectedValues]) => {
      return selectedValues.length === 0 || selectedValues.includes(pet[key]);
    });
  });

  const petsToShow = limit ? filteredPets.slice(0, limit) : filteredPets;

  return (
    <div className="p-6 md:p-10 lg:px-20 bg-purple-50">
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-bold md:text-xl">Galeria dos peludinhos:</h2>
        <Link className="text-roxo-primario hover:underline" to="/pets">
          Ver todos →
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {petsToShow.length === 0 ? (
            <p className="text-red-600 text-center p-10 w-[80vw]">Nenhum resultado encontrado!</p>
          ) : (
            petsToShow.map((pet) => (
              <PetCard key={pet.id} pet={pet} showDescricao={showDescricao} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};
