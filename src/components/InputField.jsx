export const InputField = ({
  label,
  name,
  type = "text",
  register,
  error,
  validation,
  placeholder,
  defaultValue,
}) => {
  return (
    <div className="flex flex-col w-full my-2">
      <label htmlFor={name} className="text-sm font-medium mb-1 text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        {...register(name, validation)}
        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-verde-primario placeholder:text-sm bg-white"
      />
      {error && <small className="text-red-500 mt-1">{error}</small>}
    </div>
  );
};
