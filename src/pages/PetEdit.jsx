import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import { getPet, updatePet } from "../api/pets";
import { InputField } from "../components/InputField";
import { SelectField } from "../components/SelectField";
import { SubmitButton } from "../components/SubmitButton";

export const PetEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const data = await getPet(id);
        console.log(data);
        reset(data); 
      } catch (error) {
        console.error("Erro ao buscar pet:", error);
      }
    };

    fetchPet();
  }, [id, reset]);

  const onSubmit = async (data) => {
    try {
      await updatePet(id, data);
      navigate("/mypets");
    } catch (error) {
      console.error("Erro ao atualizar pet:", error);
    }
  };

  return (
    <div className="bg-purple-50 flex flex-col flex-grow items-center justify-center relative py-10">
      <div className="bg-white p-[30px] flex flex-col justify-center w-[90%] sm:w-[500px] rounded-xs">
        <h2 className="font-bold text-xl text-center mb-2 sm:text-2xl">
          <span className="text-verde-primario">&lt;</span>Edite seu pet
          <span className="text-verde-primario">&gt;</span>
        </h2>

        <form className="my-4 flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <InputField label="Nome" name="nome" placeholder="Digite o nome do pet" register={register} validation={{ required: "Campo obrigatório" }} error={errors.nome?.message} />
          <InputField label="Idade" name="idade" placeholder="Ex: 2 anos" register={register} validation={{ required: "Campo obrigatório" }} error={errors.idade?.message} />
          <InputField label="Tipo" name="tipo" placeholder="Ex: cachorro" register={register} validation={{ required: "Campo obrigatório" }} error={errors.tipo?.message} />
          <InputField label="Imagem (URL)" name="imagem" placeholder="https://..." register={register} validation={{ required: "Campo obrigatório" }} error={errors.imagem?.message} />
          <InputField label="Descrição" name="descricao" placeholder="Conte mais sobre o pet" register={register} validation={{ required: "Campo obrigatório" }} error={errors.descricao?.message} />
          <InputField label="Observações" name="observacoes" placeholder="Algo que devemos saber?" register={register} error={errors.observacoes?.message} />

          <SelectField label="Status" name="status" options={[
            { value: "Coração livre!", label: "Coração livre!" },
            { value: "Quase lá!", label: "Quase lá!" },
            { value: "Final feliz!", label: "Final feliz!" },
          ]} register={register} validation={{ required: "Campo obrigatório" }} error={errors.status?.message} />

          <SelectField label="Porte" name="porte" options={[
            { value: "pequeno", label: "Pequeno" },
            { value: "médio", label: "Médio" },
            { value: "grande", label: "Grande" },
          ]} register={register} validation={{ required: "Campo obrigatório" }} error={errors.porte?.message} />

          <SelectField label="Sexo" name="sexo" options={[
            { value: "macho", label: "Macho" },
            { value: "fêmea", label: "Fêmea" },
          ]} register={register} validation={{ required: "Campo obrigatório" }} error={errors.sexo?.message} />

          <SelectField label="Vacinado" name="vacinado" options={[
            { value: "sim", label: "Sim" },
            { value: "não", label: "Não" },
          ]} register={register} validation={{ required: "Campo obrigatório" }} error={errors.vacinado?.message} />

          <SelectField label="Castrado" name="castrado" options={[
            { value: "sim", label: "Sim" },
            { value: "não", label: "Não" },
          ]} register={register} validation={{ required: "Campo obrigatório" }} error={errors.castrado?.message} />

          <SubmitButton label="Salvar alterações" />
        </form>
      </div>
    </div>
  );
};
