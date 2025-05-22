import { FaInstagram } from "react-icons/fa";

export const ONGItem = ({ img, nome, link, pix }) => {
  return (
    <div>
      <div className="rounded p-4 shadow-md bg-white max-w-[300px] h-[460px] flex flex-col justify-between items-center">
        <div
          className={`absolute top-2 left-2 text-xs px-2 pt-1 rounded-full`}
        ></div>
        <div className="w-[250px] h-[250px]">
          <img src={img} alt={`${nome}`} className="w-full rounded-full object-contain" />
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
                Ajude-nos doando atraves do nosso{" "}
                <span className="font-semibold uppercase text-black">pix</span>:
                <span className="font-semibold">{pix}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};