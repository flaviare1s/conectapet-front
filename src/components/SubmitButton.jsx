export const SubmitButton = ({ label, bgColor, hoverColor }) => {
  return (
    <button
      type="submit"
      className={`bg-${bgColor} hover:bg-${hoverColor} text-white font-medium text-sm py-2 px-4 rounded-md transition-colors duration-75 font-inter focus:outline-none focus:shadow-outline w-full cursor-pointer mt-5`}
    >
      {label}
    </button>
  );
};
