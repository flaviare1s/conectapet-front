import { useState } from "react";
import { Filter } from "../components/Filter";
import { PetsListComplete } from "../components/PetsListComplete";

export const Pets = () => {
  const [filters, setFilters] = useState({});
  const [showFilter, setShowFilter] = useState(false); // controle do filtro

  return (
    <div className="flex flex-col sm:flex-row relative min-h-screen">
      {/* Botão de abrir filtro (somente mobile) */}
      <button
        className="sm:hidden bg-roxo-primario text-white px-4 py-2 m-2 rounded self-start"
        onClick={() => setShowFilter(!showFilter)}
      >
        {showFilter ? "Fechar Filtros" : "Filtrar"}
      </button>

      {/* Painel de filtros */}
      <div
        className={`${
          showFilter ? "block" : "hidden"
        } sm:block absolute sm:static bg-white z-10 w-full sm:w-auto`}
      >
        <Filter onFilterChange={setFilters} onClose={() => setShowFilter(false)} />
      </div>

      {/* Lista de pets */}
      <div className="flex-1 px-1">
        <PetsListComplete
          showResponsavel={false}
          showDescricao
          filters={filters}
        />
      </div>
    </div>
  );
};
