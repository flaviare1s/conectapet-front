export const cleanFormData = (data) => {
  return {
    ...data,
    cpf: data.cpf?.replace(/\D/g, "") || "",
    cel: data.cel?.replace(/\D/g, "") || "",
    cep: data.cep?.replace(/\D/g, "") || "",
    dataN: data.dataN?.trim() || "",
    nome: data.nome?.trim() || "",
  };
};
