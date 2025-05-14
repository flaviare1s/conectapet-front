export const ONGsSectionItem = ({ image }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-white p-2 rounded-full shadow">
        <div className="w-[56px] md:w-[83px] aspect-square :text-Primary">{image}</div>
      </div>
    </div>
  )
}
