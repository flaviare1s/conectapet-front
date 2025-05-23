import { useState } from "react";
import { Filter } from "../components/Filter";
import { PetsListComplete } from "../components/PetsListComplete";

export const Pets = () => {
  const [filters, setFilters] = useState({});

  return (
    <div className="flex">
      <Filter onFilterChange={setFilters} />
      <PetsListComplete showResponsavel={false} showDescricao filters={filters} />
    </div>
  );
};
