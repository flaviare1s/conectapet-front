export const SubmitButton = ({ label }) => {
  return (
    <button
      type="submit"
      className="cursor-pointer bg-roxo-primario text-white py-2 px-4 rounded-md hover:bg-rosa-forte transition-colors font-inter font-medium text-sm w-full mt-5"
    >
      {label}
    </button>
  );
};
