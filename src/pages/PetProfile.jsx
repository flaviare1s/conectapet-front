/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getPet } from "../api/pets";
import { Loader } from "../components/Loader";
import toast from "react-hot-toast";
import { useAuth } from "../contexts/AuthContext";
import { ReturnButton } from "../components/ReturnButton";

export const PetProfile = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [petInfo, setPetInfo] = useState(null);
  const [error, setError] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const data = await getPet(id);
        setPetInfo(data);
      } catch (error) {
        if (error?.response?.status === 404) {
          navigate("/pet-nao-encontrado");
        } else {
          console.error("Erro ao buscar pet:", error);
          toast.error("Erro ao carregar pet. Tente novamente mais tarde.");
          setPetInfo(null);
        }
      }
    };
    fetchPet();
  }, [id, navigate]);

  if (!petInfo) return <Loader />;

  const statusClasses = {
    "Coração livre!": "bg-verde-primario text-black font-bold",
    "Quase lá!": "bg-yellow-300 text-black font-bold",
    "Final feliz!": "bg-roxo-primario text-white font-bold",
  };

  const badgeClass = statusClasses[petInfo.status] || "bg-transparent";

  return (
    <section>
      <div className="flex items-center justify-between mb-6 max-w-4xl mx-auto px-6">
        <h2 className="text-xl font-semibold text-roxo-primario">
          <span className="text-verde-primario">&lt;</span>
          Meu Perfil
          <span className="text-verde-primario">&gt;</span>
        </h2>
        <ReturnButton />
      </div>
      <div className="flex flex-col md:flex-row bg-white rounded shadow-md p-6 gap-6 max-w-4xl mx-auto mt-6">
        <div className="relative md:w-1/2">
          <div
            className={`absolute top-2 left-2 text-xs px-2 py-1 rounded-full ${badgeClass}`}
          >
            {petInfo.status}
          </div>
          <img
            src={petInfo.imagemUrl}
            alt={`Foto de ${petInfo.nome}`}
            className="w-full h-[300px] object-cover rounded"
          />
        </div>
        <div className="flex flex-col justify-between md:w-1/2">
          <div>
            <small className="text-xs text-cinza capitalize">
              {petInfo.tipo}
            </small>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-[#8F8F8F] h-[1px] w-10"></span>
              <p className="text-sm text-cinza font-bold">
                {petInfo.responsavel}
              </p>
            </div>
            <h2 className="mb-1 text-lg">
              Olá, eu sou{" "}
              <span className="text-roxo-primario text-2xl font-bold">
                {petInfo.nome}!
              </span>
            </h2>
            <p className="text-lg mb-2">
              Tenho {petInfo.idade} de idade e sou {petInfo.sexo}!
            </p>
            <h3 className="font-bold text-lg text-cinza">
              O que dizem sobre mim:
            </h3>
            <p className="text-base text-cinza">"{petInfo.descricao}"</p>
            <div>
              <h3 className="font-bold text-lg text-cinza mt-4">
                Mais informações sobre mim:
              </h3>
              <p>Porte: {petInfo.porte}</p>
              <p>Vacinado(a): {petInfo.vacinado}</p>
              <p>Castrado(a): {petInfo.castrado}</p>
              {petInfo.observacoes && (
                <p className="font-semibold mt-2">
                  Obs.: {petInfo.observacoes}
                </p>
              )}
            </div>
          </div>

          {petInfo.status === "Final feliz!" ? (
            <p className="mt-6 self-start text-roxo-primario font-bold">
              Esse pet já encontrou uma família! 🩷
            </p>
          ) : user ? (
            user.role === "user" ? (
              <Link
                to={`/pets/adopt/${petInfo.id}`}
                className="mt-6 self-start bg-verde-primario text-black font-bold py-2 px-4 rounded hover:brightness-90 transition-all"
              >
                Quero Adotar!
              </Link>
            ) : user.role === "guardian" ? (
              null
            ) : null
          ) : (
            <Link
              onClick={() =>
                toast.error("Para adotar um pet, você precisa estar logado!")
              }
              to={`/login`}
              className="mt-6 self-start bg-verde-primario text-black font-bold py-2 px-4 rounded hover:brightness-90 transition-all"
            >
              Quero Adotar!
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};
