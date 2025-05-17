export const SelectField = ({ label, name, options, register, validation, error }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-sm font-medium mb-1 text-gray-700">
        {label}
      </label>
      <select
        id={name}
        {...register(name, validation)}
        className="py-2 px-3 rounded-md border border-gray-300"
      >
        <option value="">Selecione</option>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      {error && <small className="text-red-500">{error}</small>}
    </div>
  );
};
