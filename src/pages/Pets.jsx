import { useState } from "react";
import { Filter } from "../components/Filter";
import { PetsList } from "../components/PetsList";

export const Pets = () => {
  const [filters, setFilters] = useState({});

  return (
    <div className="flex">
      <Filter onFilterChange={setFilters} />
      <PetsList showResponsavel={false} showDescricao filters={filters} />
    </div>
  );
};
