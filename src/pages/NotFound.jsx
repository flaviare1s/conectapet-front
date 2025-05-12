export const NotFound = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-roxo-primario mb-4">404</h1>
        <p className="text-xl md:text-2xl font-medium text-cinza mb-4">
          A página que você procurou não foi encontrada.
        </p>
        <p className="text-base md:text-lg text-cinza">
          Volte para a página inicial e tente novamente.
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