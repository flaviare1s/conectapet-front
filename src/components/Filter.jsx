import { useState } from "react";

export const Filter = ({ onFilterChange, onClose }) => {
  const [filters, setFilters] = useState({
    tipo: [],
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
    <div className="sm:w-[190px] text-base w-full p-4 shadow-2xl bg-white/80 rounded-lg backdrop-blur h-screen sm:h-auto">
      {/* Botão de fechar (somente mobile) */}
      <div className="flex justify-end sm:hidden mb-2">
        <button
          className="text-roxo-primario text-3xl font-semibold hover:underline"
          onClick={onClose}
        >
          ✕
        </button>
      </div>

      <FilterGroup title="Tipo" name="tipo" options={["cachorro", "gato"]} selected={filters.tipo} onChange={handleChange} />
      <FilterGroup title="Status" name="status" options={["Coração livre!", "Quase lá!", "Final feliz!"]} selected={filters.status} onChange={handleChange} />
      <FilterGroup title="Porte" name="porte" options={["pequeno", "médio", "grande"]} selected={filters.porte} onChange={handleChange} />
      <FilterGroup title="Sexo" name="sexo" options={["macho", "fêmea"]} selected={filters.sexo} onChange={handleChange} />
      <FilterGroup title="Vacinado" name="vacinado" options={["sim", "não"]} selected={filters.vacinado} onChange={handleChange} />
      <FilterGroup title="Castrado" name="castrado" options={["sim", "não"]} selected={filters.castrado} onChange={handleChange} />
    </div>
  );
};

const FilterGroup = ({ title, name, options, selected, onChange }) => (
  <div className="mb-4">
    <label className="font-semibold block mb-2">{title}</label>
    <div className="flex flex-wrap gap-3">
      {options.map((option) => (
        <label key={option} htmlFor={`${name}-${option}`} className="flex items-center space-x-1">
          <input
            type="checkbox"
            id={`${name}-${option}`}
            name={name}
            value={option}
            checked={selected.includes(option)}
            onChange={onChange}
            className="accent-roxo-primario"
          />
          <span>{option}</span>
        </label>
      ))}
    </div>
  </div>
);
