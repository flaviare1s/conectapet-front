import { useForm } from "react-hook-form";
import { InputField } from "../components/InputField";
import { SubmitButton } from "../components/SubmitButton";
import { addPet } from "../api/pets";
import toast from "react-hot-toast";
import { useContext } from "react";
import { UserContext } from "../contexts/userContext";

export const PetRegister = () => {
  const { user } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    if (!user || !user.id) {
      console.error("Usuário não está logado ou não possui ID.");
      return;
    }

    const petData = {
      ...data,
      guardianId: user.id,
      responsavel: user.name,
      temperamento: data.temperamento.split(",").map((t) => t.trim())
    };

    try {
      await addPet(petData);
      toast.success("Pet cadastrado com sucesso!");
      reset();
    } catch (err) {
      toast.error("Erro ao cadastrar pet.");
      console.error("Erro ao cadastrar pet:", err);
    }
  };

  return (
    <div className="bg-purple-50 flex flex-col flex-grow items-center justify-center relative py-10">
      <div className="bg-white p-[30px] flex flex-col justify-center w-[90%] sm:w-[500px] rounded-xs">
        <h2 className="font-bold text-xl text-center mb-2 sm:text-2xl">
          <span className="text-verde-primario">&lt;</span>Cadastre seu pet
          <span className="text-verde-primario">&gt;</span>
        </h2>

        <form className="my-4 flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
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
            label="Tipo"
            name="tipo"
            placeholder="Ex: cachorro"
            register={register}
            validation={{ required: "Campo obrigatório" }}
            error={errors.tipo?.message}
          />

          <InputField
            label="Imagem (URL)"
            name="imagem"
            placeholder="https://..."
            register={register}
            validation={{ required: "Campo obrigatório" }}
            error={errors.imagem?.message}
          />

          <InputField
            label="Descrição"
            name="descricao"
            placeholder="Conte mais sobre o pet"
            register={register}
            error={errors.descricao?.message}
          />

          <InputField
            label="Observações"
            name="observacoes"
            placeholder="Algo que devemos saber?"
            register={register}
            error={errors.observacoes?.message}
          />

          <InputField
            label="Temperamento"
            name="temperamento"
            placeholder="Ex: brincalhão, calmo"
            register={register}
            error={errors.temperamento?.message}
          />

          <div className="flex flex-col">
            <label>Status</label>
            <select {...register("status", { required: true })} className="input">
              <option value="">Selecione</option>
              <option value="Coração livre!">Coração livre!</option>
              <option value="Quase lá!">Quase lá!</option>
              <option value="Final feliz!">Final feliz!</option>
            </select>
            {errors.status && <small className="text-red-500">{errors.status.message}</small>}
          </div>

          <div className="flex flex-col">
            <label>Porte</label>
            <select {...register("porte", { required: true })} className="input">
              <option value="">Selecione</option>
              <option value="pequeno">Pequeno</option>
              <option value="médio">Médio</option>
              <option value="grande">Grande</option>
            </select>
            {errors.porte && <small className="text-red-500">{errors.porte.message}</small>}
          </div>

          <div className="flex flex-col">
            <label>Sexo</label>
            <select {...register("sexo", { required: true })} className="input">
              <option value="">Selecione</option>
              <option value="macho">Macho</option>
              <option value="fêmea">Fêmea</option>
            </select>
            {errors.sexo && <small className="text-red-500">{errors.sexo.message}</small>}
          </div>

          <div className="flex flex-col">
            <label>Vacinado</label>
            <select {...register("vacinado", { required: true })} className="input">
              <option value="">Selecione</option>
              <option value="sim">Sim</option>
              <option value="não">Não</option>
            </select>
            {errors.vacinado && <small className="text-red-500">{errors.vacinado.message}</small>}
          </div>

          <div className="flex flex-col">
            <label>Castrado</label>
            <select {...register("castrado", { required: true })} className="input">
              <option value="">Selecione</option>
              <option value="sim">Sim</option>
              <option value="não">Não</option>
            </select>
            {errors.castrado && <small className="text-red-500">{errors.castrado.message}</small>}
          </div>

          <SubmitButton label="Cadastrar Pet" />
        </form>
      </div>
    </div>
  );
};
