import { useForm } from "react-hook-form";
import { InputField } from "../components/InputField";
import { SubmitButton } from "../components/SubmitButton";
import { addPet } from "../api/pets";
import toast from "react-hot-toast";
import { SelectField } from "../components/SelectField";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { ReturnButton } from "../components/ReturnButton";

export const PetRegister = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (!user || !user.id) {
      console.error("Usuário não está logado ou não possui ID.");
      return;
    }

    const formData = new FormData();

    formData.append("imagem", data.imagem[0]);

    formData.append("nome", data.nome);
    formData.append("idade", data.idade);
    formData.append("descricao", data.descricao);
    formData.append("observacoes", data.observacoes || "");
    formData.append("status", data.status);
    formData.append("porte", data.porte);
    formData.append("sexo", data.sexo);
    formData.append("vacinado", data.vacinado);
    formData.append("castrado", data.castrado);
    formData.append("tipo", data.tipo);

    formData.append("guardianId", user.id);
    formData.append("responsavel", user.name);

    try {
      await addPet(formData);
      toast.success("Pet cadastrado com sucesso!");
      reset();
      navigate("/mypets");
    } catch (err) {
      toast.error("Erro ao cadastrar pet.");
      console.error("Erro ao cadastrar pet:", err);
    }
  };

  return (
    <div className="bg-purple-50 flex flex-col flex-grow items-center justify-center relative py-10">
      <div className="self-end px-6 sm:px-10 mb-2">
        <ReturnButton />
      </div>
      <div className="bg-white p-[30px] flex flex-col justify-center w-[90%] sm:w-[500px] rounded-xs">
        <h2 className="font-bold text-xl text-center mb-2 sm:text-2xl">
          <span className="text-verde-primario">&lt;</span>Cadastre seu pet
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
            error={errors.status?.message}
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

          <InputField
            label="Foto"
            name="imagem"
            type="file"
            accept="image/*"
            register={register}
            validation={{ required: "Campo obrigatório" }}
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

          <SubmitButton label="Cadastrar Pet" />
        </form>
      </div>
    </div>
  );
};
