import { FiEdit, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";

export const PetCardByGuardian = ({ pet }) => {
  const statusClasses = {
    "Coração livre!": "bg-verde-primario text-black font-bold",
    "Quase lá!": "bg-yellow-300 text-black font-bold",
    "Final feliz!": "bg-roxo-primario text-white font-bold",
  };

  const badgeClass = statusClasses[pet.status] || "bg-gray-300 text-gray-800";

  return (
    <div className="rounded p-4 shadow-md bg-white max-w-[300px]">
      <div className="relative">
        <div
          className={`absolute top-2 left-2 text-xs px-2 py-1 rounded-full ${badgeClass}`}
        >
          {pet.status}
        </div>
        <img
          src={pet.imagem}
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
            <p className="text-sm text-cinza font-bold">{pet.responsavel}</p>
          </div>
          <div className="flex items-center justify-end gap-2">
            <Link to={`/mypets/edit/${pet.id}`}><FiEdit
             className="text-verde-primario text-xl" /></Link>
            <button className="cursor-pointer"><FiTrash2 className="text-roxo-primario text-xl" /></button>
          </div>
        </div>
      </div>
    </div>
  );
};
