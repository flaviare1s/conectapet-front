import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../components/Loader";
import { deleteAdoption, getAdoptionsByPetId } from "../api/adoptions";
import toast from "react-hot-toast";
import { AdoptionFormByPet } from "./AdoptionFormByPet";
import { updatePetStatus } from "../api/pets";

export const AdoptionListByPet = () => {
  const { petId } = useParams();
  const [adoptions, setAdoptions] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleDeleteAdoption = async (adoptionId, petId) => {
    const confirmed = window.confirm("Tem certeza que deseja deletar esse formulário?");
    if (!confirmed) return;
    try {
      await deleteAdoption(adoptionId);

      const updatedAdoptions = adoptions.filter(a => a.id !== adoptionId);
      setAdoptions(updatedAdoptions);

      const remaining = updatedAdoptions.filter(a => a.petId === petId);
      if (remaining.length === 0) {
        await updatePetStatus(petId, "Coração livre!");
      }
    } catch (error) {
      toast.error("Erro ao deletar adoção", error);
    }
  };
  
  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getAdoptionsByPetId(petId);
        setAdoptions(data);
      } catch (err) {
        console.error(err);
        toast.error("Erro ao carregar adoções");
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [petId]);

  if (loading) return <Loader />;

  return (
    <div className="p-6 max-w-2xl mx-auto min-h-[80vh]">
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-center text-roxo-primario">Formulários de adoção</h2>
      {adoptions.length === 0 ? (
        <p className="text-center">Nenhuma solicitação recebida ainda!</p>
      ) : (
        <ul className="space-y-4">
          {adoptions.map((a) => (
            <AdoptionFormByPet key={a.id} adoption={a} onDelete={() => handleDeleteAdoption(a.id, petId)} />
          ))}
        </ul>
      )}
    </div>
  );
};
