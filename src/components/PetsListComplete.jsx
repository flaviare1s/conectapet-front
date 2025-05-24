import { PetCard } from "./PetCard";
import { useEffect, useState } from "react";
import { getPets } from "../api/pets";
import { Loader } from "./Loader";
import ReturnButton from "./ReturnButton";
import { useResponsiveLimit } from "../hooks/useResponsiveLimit";
import { GrNext, GrPrevious } from "react-icons/gr";

export const PetsListComplete = ({
  showDescricao = true,
  filters = {}
}) => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const limit = useResponsiveLimit();

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

  useEffect(() => {
    setPage(1);
  }, [filters]);

  if (loading) return <Loader />;

  const filteredPets = pets.filter((pet) =>
    Object.entries(filters).every(([key, selectedValues]) =>
      selectedValues.length === 0 || selectedValues.includes(pet[key])
    )
  );

  const totalPages = Math.ceil(filteredPets.length / limit);
  const startIndex = (page - 1) * limit;
  const petsToShow = filteredPets.slice(startIndex, startIndex + limit);

  return (
    <div className="py-6 px-2 sm:p-6 md:p-10 lg:px-20 bg-purple-50">
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-bold md:text-xl sm:hidden">Pets:</h2>
        <h2 className="font-bold md:text-xl hidden sm:block">Galeria dos peludinhos:</h2>
        <ReturnButton />
      </div>

      <div className="flex flex-col justify-center items-center">
        {petsToShow.length === 0 && (
          <p className="text-gray-600 h-[60vh]">Nenhum resultado encontrado!</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {petsToShow.map((pet) => (
            <PetCard key={pet.id} pet={pet} showDescricao={showDescricao} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-8 flex gap-2">
            <button
              className="bg-roxo-primario text-white p-2 rounded disabled:opacity-50"
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
            >
              <GrPrevious />
            </button>
            <span className="text-sm self-center">
              Página {page} de {totalPages}
            </span>
            <button
              className="bg-roxo-primario text-white p-2 rounded disabled:opacity-50"
              onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={page === totalPages}
            >
              <GrNext />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
