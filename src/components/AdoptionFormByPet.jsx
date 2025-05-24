import { FaPaw } from "react-icons/fa";

export const AdoptionFormByPet = ({ adoption }) => {
  return (
    <div className="bg-verde-piscina/20 border border-verde-escuro/30 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform">
      <div className="flex items-center gap-2 mb-4">
        <FaPaw className="text-verde-primario text-2xl" />
        <h3 className="text-lg font-bold text-roxo-primario">
          Deu match com {adoption.petName}!
        </h3>
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
        <p>
          <span className="font-semibold">Email:</span>{" "}
          {adoption.email || "não informado"}
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
          <span className="font-semibold">Assinou termo de responsabilidade?</span>{" "}
          {adoption.termo === "sim" ? "Sim" : "Não"}
        </p>
      </div>
    </div>
  );
};
