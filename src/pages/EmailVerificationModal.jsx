import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

export function EmailVerificationModal({ isOpen, onRequestClose, onVerify }) {
  const [code, setCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onVerify(code);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="fixed inset-0 bg-[#000000b3] flex justify-center items-center z-50"
      className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative mx-4"
    >
      <button
        onClick={onRequestClose}
        className="absolute top-2 right-3 text-roxo-primario hover:text-rosa-forte font-bold text-3xl cursor-pointer"
        aria-label="Fechar modal"
      >
        &times;
      </button>

      <div className="flex flex-col items-center gap-4">
        
        <h2 className="text-2xl font-bold mb-2 text-roxo-primario p-3 rounded-full flex items-center gap-5 text-center">
          <span role="img" aria-label="gatinho">🐱</span>
          Verifique seu email
          <span role="img" aria-label="cachorrinho">🐶</span>
        </h2>

        <p className="text-center text-gray-700 mb-4">
          Digite o código que enviamos para seu email para confirmar sua conta.
        </p>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Código de verificação"
            className="border border-gray-300 rounded-md p-2 text-center text-xl font-mono tracking-widest focus:outline-none focus:ring-2 focus:ring-roxo-primario"
            maxLength={6}
          />

          <button
            type="submit"
            className="bg-verde-primario py-2 rounded-md font-semibold hover:bg-verde-escuro transition text-white"
          >
            Verificar
          </button>
        </form>
      </div>
    </Modal>
  );
}
