const bgClasses = {
  "verde-primario": "bg-verde-primario hover:bg-verde-escuro",
  "roxo-primario": "bg-roxo-primario hover:bg-rosa-forte",
};

export const SubmitButton = ({ label, bgColor = "verde-primario" }) => {
  return (
    <button
      type="submit"
      className={`text-white font-medium text-sm py-2 px-4 rounded-md transition-colors duration-75 font-inter focus:outline-none focus:shadow-outline w-full cursor-pointer mt-5 ${bgClasses[bgColor]}`}
    >
      {label}
    </button>
  );
};
