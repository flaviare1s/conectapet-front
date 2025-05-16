export const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white w-screen">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-verde-primario border-t-roxo-primario rounded-full animate-spin" />

        <p className="text-roxo-primario font-semibold"><spam className="text-verde-primario text-xl">&lt;</spam>Carregando...<spam className="text-verde-primario text-xl">&gt;</spam></p>
      </div>
    </div>
  );
};
