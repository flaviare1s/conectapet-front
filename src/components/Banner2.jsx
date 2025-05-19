import bg from "../assets/bg-banner2.png"

export const Banner2 = () => {
  return (
    <div className="h-full flex">
      <div className="flex-shrink-0 w-full sm:w-[600px] h-full">
        <img
          className="w-full h-full object-cover"
          src={bg}
          alt="Pessoa abraçando um cachorro"
        />
      </div>
      <div className="bg-verde-primario h-full flex-1 hidden sm:block">
        texto
      </div>
    </div>
  )
}
