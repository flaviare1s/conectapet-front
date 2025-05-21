import React from 'react'
import { FaInstagram } from "react-icons/fa"

export const ONGItem = ({ img, nome, link , descricao }) => {
    return (
        <div>
            <div className="rounded p-4 shadow-md bg-white max-w-[300px]">
                <div
                    className={`absolute top-2 left-2 text-xs px-2 py-1 rounded-full`}
                >
                    { }
                </div>
                <img
                    src={img}
                    alt={`${nome}`}

                    className="w-[300px] h-[200px] object-cover rounded"
                />


                <div className="mt-3">
                    <small className="text-xs text-cinza capitalize">Ongs</small>
                    <div className="font-medium text-lg">
                        <span>{nome}</span> 
                    </div>
                    <div className="flex flex-col">
                        <div className="flex items-center gap-1">
                            <span className=""></span>
                            <a href={link} className="text-sm text-cinza font-bold"><FaInstagram className='text-2xl text-roxo-primario hover:text-rosa-forte cursor-pointer'/></a>
                        </div>
                    <small className="text-xs text-cinza capitalize">Descrição</small>
                    <div className="font-extralight text-lg">
                        <span>{descricao}</span> 
                    </div>

                    </div>          

                </div>

            </div>
        </div>
    )
}

