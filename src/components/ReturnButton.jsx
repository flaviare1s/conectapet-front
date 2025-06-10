import { useNavigate } from "react-router-dom";

export const ReturnButton = () => {
    const navigate = useNavigate();
    
  return (
    <button
      onClick={() => navigate(-1)}
      className="text-roxo-primario hover:underline cursor-pointer"
    >
      &larr; Voltar
    </button>
  );
};

