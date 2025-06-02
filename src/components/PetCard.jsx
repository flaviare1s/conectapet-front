import { Link } from "react-router-dom";

export const PetCard = ({ pet, showDescricao = true }) => {
  const statusClasses = {
    "Coração livre!": "bg-verde-primario text-black font-bold",
    "Quase lá!": "bg-yellow-300 text-black font-bold",
    "Final feliz!": "bg-roxo-primario text-white font-bold",
  };

  const badgeClass = statusClasses[pet.status] || "bg-transparent";

  return (
    <Link to={`/pets/${pet.id}`} className="rounded p-4 shadow-md bg-white max-w-[300px]">
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
            <p className="text-sm text-cinza font-bold">{pet.responsavel}</p>
          </div>
          {showDescricao && (
            <p className="text-sm text-cinza mt-3">{pet.descricao}</p>
          )}
        </div>
        
      </div>
    </Link>
  );
};
