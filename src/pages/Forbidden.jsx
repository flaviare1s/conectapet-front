export const Forbidden = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-roxo-primario mb-4">403</h1>
        <p className="text-xl md:text-2xl font-medium text-cinza mb-4">
          Você não tem permissão para acessar esta página.
        </p>
        <p className="text-base md:text-lg text-cinza">
          Faça login com uma conta autorizada ou volte para a página inicial.
        </p>
        <a
          href="/"
          className="mt-6 font-bold inline-block bg-roxo-primario text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition duration-300 hover:bg-rosa-forte hover:text-white"
        >
          Voltar para a página inicial
        </a>
      </div>
    </div>
  );
};
