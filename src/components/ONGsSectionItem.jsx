const borderClasses = {
  "verde-primario": "border-2 border-verde-primario",
  "roxo-primario": "border-2 border-roxo-primario",
};


export const ONGsSectionItem = ({ image, name, borderColor }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className={`bg-white p-1 rounded-full shadow border border-purple-200 ${borderClasses[borderColor]}`}>
        <img className="w-[56px] md:w-[83px] aspect-square: text-Primary rounded-full" src={image} alt= {`Logo da ONG {name}`}/>
      </div>
      <p className="font-semibold text-xs py-2"> {name} </p>

    </div>
  )
}