import { FaInstagram } from "react-icons/fa";

export const ONGItem = ({ img, nome, link, pix }) => {
  return (
    <div>
      <div className="rounded p-4 shadow-md bg-white max-w-[300px] h-[420px] flex flex-col justify-between items-center">
        <div className="w-[250px] h-[250px] p-2 rounded-md">
          <img src={img} alt={`${nome}`} className="w-full rounded-full object-contain border-2 border-verde-primario p-1" />
        </div>

        <div className="mt-3">
          <small className="text-xs text-cinza uppercase">Ong</small>
          <div className="flex flex-col">
            <div>
              <a
                href={link}
                target="_blank"
                className="text-sm text-cinza font-bold flex item-center py-2 gap-2"
              >
                <FaInstagram className="text-2xl text-roxo-primario hover:text-rosa-forte cursor-pointer py-" />
                <span className="text-roxo-primario text-lg cursor-pointer py- hover:text-rosa-forte ">
                  {nome}
                </span>
              </a>
            </div>
            <small className="text-xs text-cinza capitalize">Descrição</small>
            <div className="font-extralight text-sm ">
              <p className="text-cinza font-medium">
                Ajude doando através do {" "}
                <span className="font-semibold uppercase text-black">pix</span>:{" "}
                <span className="font-bold">{pix}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};