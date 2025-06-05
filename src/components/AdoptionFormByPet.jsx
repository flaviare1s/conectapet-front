import { useState } from "react";
import { FaPaw } from "react-icons/fa";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { toggleFavoriteAdoption } from "../api/adoptions";
import toast from "react-hot-toast";

export const AdoptionFormByPet = ({ adoption, onDelete, onToggleFavorite }) => {
  const [favorited, setFavorited] = useState(adoption.favoritado);
  const [loadingFavorite, setLoadingFavorite] = useState(false);

  const handleFavorite = async () => {
    setLoadingFavorite(true);
    try {
      const newFavoritedStatus = !favorited;
      await toggleFavoriteAdoption(adoption.id, newFavoritedStatus);
      setFavorited(newFavoritedStatus);

      if (onToggleFavorite) {
        onToggleFavorite({
          ...adoption,
          favoritado: newFavoritedStatus,
        });
      }
    } catch (error) {
      toast.error("Erro ao atualizar favorito", error);
    } finally {
      setLoadingFavorite(false);
    }
  };

  return (
    <div className="bg-verde-piscina/20 border border-verde-escuro/30 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <FaPaw className="text-verde-primario text-2xl" />
          <h3 className="text-lg font-bold text-roxo-primario">
            Deu match com {adoption.pet.nome}!
          </h3>
        </div>
        <button onClick={onDelete} className="text-roxo-primario text-2xl cursor-pointer"><IoClose /></button>
      </div>
      <div className="space-y-1 text-cinza">
        <p>
          <span className="font-semibold">Nome:</span> {adoption.nome}
        </p>
        <p>
          <span className="font-semibold">CPF:</span> {adoption.cpf}
        </p>
        <p>
          <span className="font-semibold">Telefone:</span> {adoption.cel}
        </p>
        <hr className="my-2 opacity-50" />
        <p>
          <span className="font-semibold">Custa vacinas e cuidados?</span>{" "}
          {adoption.custos === "sim" ? "Sim" : "Não"}
        </p>
        <p>
          <span className="font-semibold">Compromisso vitalício?</span>{" "}
          {adoption.compromisso === "sim" ? "Sim" : "Não"}
        </p>
        <p>
          <span className="font-semibold">Visitas pós-adoção?</span>{" "}
          {adoption.visitas === "sim" ? "Sim" : "Não"}
        </p>
        <p>
          <span className="font-semibold">Motivação:</span>{" "}
          {adoption.motivacao}
        </p>
      </div>
      <button onClick={handleFavorite} disabled={loadingFavorite} className="mt-3 text-2xl cursor-pointer">
        {favorited ? <IoIosStar className="text-roxo-primario" /> : <IoIosStarOutline className="text-gray-400" />}
      </button>
    </div>
  );
};
