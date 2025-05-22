import { PetCard } from "./PetCard";
import { useEffect, useState } from "react";
import { getPets } from "../api/pets";
import { Loader } from "./Loader";
import ReturnButton from "./ReturnButton";

export const PetsListComplete = ({
  limit,
  showDescricao = true,
  filters = {},
}) => {
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
    <div className="py-6 px-2 sm:p-6 md:p-10 lg:px-20 bg-purple-50 w-screen">
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-bold md:text-xl sm:hidden">Pets:</h2>
        <h2 className="font-bold md:text-xl hidden sm:block">
          Galeria dos peludinhos:
        </h2>
        <ReturnButton />
      </div>
      <div className="flex flex-col justify-center items-center">
        {petsToShow.length === 0 && <p className="text-gray-600 h-[60vh]">Nenhum resultado encontrado!</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {petsToShow.map((pet) => (
            <PetCard key={pet.id} pet={pet} showDescricao={showDescricao} />
          ))}
        </div>
      </div>
    </div>
  );
};
