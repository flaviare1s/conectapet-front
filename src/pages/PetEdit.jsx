import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import { getPet, updatePet } from "../api/pets";
import { InputField } from "../components/InputField";
import { SelectField } from "../components/SelectField";
import { SubmitButton } from "../components/SubmitButton";
import { ReturnButton } from "../components/ReturnButton";

export const PetEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pet, setPet] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm();

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const data = await getPet(id);
        console.log(data);
        setPet(data);
        reset(data);
      } catch (error) {
        console.error("Erro ao buscar pet:", error);
      }
    };

    fetchPet();
  }, [id, reset]);

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();

      for (const key in data) {
        if (key === "imagem") {
          if (data.imagem.length > 0) {
            formData.append("imagem", data.imagem[0]);
          } else if (pet?.imagemUrl) {
            formData.append("imagemUrl", pet.imagemUrl);
          }
        } else {
          formData.append(key, data[key]);
        }
      }

      await updatePet(id, formData);
      navigate("/mypets");
    } catch (error) {
      console.error("Erro ao atualizar pet:", error);
    }
  };
  
  const imagemSelecionada = watch("imagem");
  
  return (
    <div className="bg-purple-50 flex flex-col flex-grow items-center justify-center relative py-10">
      <div className="self-end px-6 sm:px-10 mb-2">
        <ReturnButton />
      </div>
      <div className="bg-white p-[30px] flex flex-col justify-center w-[90%] sm:w-[500px] rounded-xs">
        <h2 className="font-bold text-xl text-center mb-2 sm:text-2xl">
          <span className="text-verde-primario">&lt;</span>Edite seu pet
          <span className="text-verde-primario">&gt;</span>
        </h2>

        <form
          className="my-4 flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <SelectField
            label="Tipo"
            name="tipo"
            options={[
              { value: "cachorro", label: "Cachorro" },
              { value: "gato", label: "Gato" },
            ]}
            register={register}
            validation={{ required: "Campo obrigatório" }}
            error={errors.tipo?.message}
          />
          <InputField
            label="Nome"
            name="nome"
            placeholder="Digite o nome do pet"
            register={register}
            validation={{ required: "Campo obrigatório" }}
            error={errors.nome?.message}
          />
          <InputField
            label="Idade"
            name="idade"
            placeholder="Ex: 2 anos"
            register={register}
            validation={{ required: "Campo obrigatório" }}
            error={errors.idade?.message}
          />
          {imagemSelecionada && imagemSelecionada.length > 0 ? (
            <p>Imagem selecionada: {imagemSelecionada[0].name}</p>
          ) : (
            pet && pet.imagemUrl && (
              <img
                src={pet.imagemUrl}
                alt={`Foto de ${pet.nome}`}
                className="w-40 h-40 object-cover"
              />
            )
          )}
          <InputField
            label="Foto"
            name="imagem"
            type="file"
            accept="image/*"
            register={register}
            error={errors.imagem?.message}
          />
          <InputField
            label="Descrição"
            name="descricao"
            placeholder="Conte mais sobre o pet"
            register={register}
            validation={{ required: "Campo obrigatório" }}
            error={errors.descricao?.message}
          />
          <InputField
            label="Observações"
            name="observacoes"
            placeholder="Algo que devemos saber?"
            register={register}
            error={errors.observacoes?.message}
          />

          <SelectField
            label="Status"
            name="status"
            options={[
              { value: "Coração livre!", label: "Coração livre!" },
              { value: "Quase lá!", label: "Quase lá!" },
              { value: "Final feliz!", label: "Final feliz!" },
            ]}
            register={register}
            validation={{ required: "Campo obrigatório" }}
            error={errors.status?.message}
          />

          <SelectField
            label="Porte"
            name="porte"
            options={[
              { value: "pequeno", label: "Pequeno" },
              { value: "médio", label: "Médio" },
              { value: "grande", label: "Grande" },
            ]}
            register={register}
            validation={{ required: "Campo obrigatório" }}
            error={errors.porte?.message}
          />

          <SelectField
            label="Sexo"
            name="sexo"
            options={[
              { value: "macho", label: "Macho" },
              { value: "fêmea", label: "Fêmea" },
            ]}
            register={register}
            validation={{ required: "Campo obrigatório" }}
            error={errors.sexo?.message}
          />

          <SelectField
            label="Vacinado"
            name="vacinado"
            options={[
              { value: "sim", label: "Sim" },
              { value: "não", label: "Não" },
            ]}
            register={register}
            validation={{ required: "Campo obrigatório" }}
            error={errors.vacinado?.message}
          />

          <SelectField
            label="Castrado"
            name="castrado"
            options={[
              { value: "sim", label: "Sim" },
              { value: "não", label: "Não" },
            ]}
            register={register}
            validation={{ required: "Campo obrigatório" }}
            error={errors.castrado?.message}
          />

          <SubmitButton label="Salvar alterações" />
        </form>
      </div>
    </div>
  );
};
