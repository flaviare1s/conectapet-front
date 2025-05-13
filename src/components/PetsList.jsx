import data from "../../server/db.json"
import { Link } from "react-router-dom"
import { PetCard } from "./PetCard"
import { useEffect, useState } from "react"
import { getPets } from "../api/pets"

export const PetsList = () => {
  const [pets, setPets] = useState([])

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const result = await getPets()
        setPets(result)
      } catch (error) {
        console.error("Erro ao buscar pets: ", error)
      }
    }
    fetchPets()
  }, [])

  return (
    <div className="p-6 md:p-10 lg:px-20 bg-purple-50">
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-bold md:text-xl">Galeria dos peludinhos:</h2>
        <Link className="text-roxo-primario hover:underline" to="/pets">Ver todos →</Link>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {pets.slice(0, 8).map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>
      </div>
    </div>
  )
}
