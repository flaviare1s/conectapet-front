import { useState } from "react";

export const Filter = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    status: [],
    porte: [],
    sexo: [],
    vacinado: [],
    castrado: [],
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    const newValues = checked
      ? [...filters[name], value]
      : filters[name].filter((v) => v !== value);

    const newFilters = { ...filters, [name]: newValues };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="sm:w-[190px] sm:text-base bg-white py-4 px-2 sm:px-4 shadow-2xl w-[150px] text-sm">
      <FilterGroup
        title="Status"
        name="status"
        options={["Coração livre!", "Quase lá!", "Final feliz!"]}
        selected={filters.status}
        onChange={handleChange}
      />

      <FilterGroup
        title="Porte"
        name="porte"
        options={["pequeno", "médio", "grande"]}
        selected={filters.porte}
        onChange={handleChange}
      />

      <FilterGroup
        title="Sexo"
        name="sexo"
        options={["macho", "fêmea"]}
        selected={filters.sexo}
        onChange={handleChange}
      />

      <FilterGroup
        title="Vacinado"
        name="vacinado"
        options={["sim", "não"]}
        selected={filters.vacinado}
        onChange={handleChange}
      />

      <FilterGroup
        title="Castrado"
        name="castrado"
        options={["sim", "não"]}
        selected={filters.castrado}
        onChange={handleChange}
      />
    </div>
  );
};

const FilterGroup = ({ title, name, options, selected, onChange }) => (
  <div className="mb-4">
    <label className="font-semibold block mb-1">{title}</label>
    {options.map((option) => (
      <div key={option} className="flex items-center mb-1">
        <input
          type="checkbox"
          id={`${name}-${option}`}
          name={name}
          value={option}
          checked={selected.includes(option)}
          onChange={onChange}
          className="mr-2 accent-roxo-primario"
        />
        <label htmlFor={`${name}-${option}`}>{option}</label>
      </div>
    ))}
  </div>
);
