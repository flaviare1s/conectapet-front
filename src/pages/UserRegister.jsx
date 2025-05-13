import { useForm } from "react-hook-form";
import { InputField } from "../components/InputField";
import { SubmitButton } from "../components/SubmitButton";
import { HiddenRoleInput } from "../components/HiddenRoleInput";
import { createUser } from "../api/users";
import toast from "react-hot-toast";
import { useUser } from "../hooks/useUser";
import { useNavigate } from "react-router-dom";

import bgDog1 from "../assets/bg-dog1.png";
import bgDog2 from "../assets/bg-dog2.png";
import bgDog3 from "../assets/bg-dog3.png";
import bgDog4 from "../assets/bg-dog4.png";

export const UserRegister = () => {
  const { login } = useUser();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await createUser(data);
      toast.success("Usuário cadastrado com sucesso!");

      login(data);
      navigate("/");
    } catch (error) {
      toast.error("Erro ao cadastrar usuário");
      console.error("Erro ao cadastrar usuário:", error);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="bg-verde-primario flex flex-col flex-grow min-h-[95vh] items-center justify-center relative">
      <div className="absolute bottom-0 right-0 hidden lg:block w-[300px]">
        <img className="w-full" src={bgDog1} alt="Desenho de cachorro" />
      </div>
      <div className="absolute bottom-0 left-0 hidden lg:block w-[300px]">
        <img className="w-full" src={bgDog2} alt="Desenho de cachorro" />
      </div>
      <div className="absolute bottom-[300px] right-0 hidden lg:block w-[300px]">
        <img className="w-full" src={bgDog3} alt="Desenho de cachorro" />
      </div>
      <div className="absolute bottom-[300px] left-0 hidden lg:block w-[300px]">
        <img className="w-full" src={bgDog4} alt="Desenho de cachorro" />
      </div>
      <div className="bg-white p-[30px] flex flex-col justify-center w-[90%] sm:w-[500px] rounded-xs">
        <h2 className="font-bold text-xl text-center mb-2 sm:text-2xl">
          <span className="text-verde-primario">&lt;</span>Crie sua conta
          <span className="text-verde-primario">&gt;</span>
        </h2>
        <small className="text-dark text-center">
          Já possui uma conta? Entre{" "}
          <a className="underline" href="/login">
            aqui
          </a>
        </small>
        <form onSubmit={handleSubmit(onSubmit)} className="my-4">
          <InputField
            label="Nome *"
            name="name"
            type="text"
            placeholder="Insira seu nome"
            register={register}
            error={errors.name?.message}
            validation={{ required: "Nome é obrigatório" }}
          />
          <InputField
            label="Email *"
            name="email"
            type="email"
            placeholder="Insira seu email"
            register={register}
            error={errors.email?.message}
            validation={{
              required: "Email é obrigatório",
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                message: "Email inválido",
              },
            }}
          />
          <InputField
            label="Senha *"
            name="password"
            type="password"
            placeholder="Insira sua senha"
            register={register}
            error={errors.password?.message}
            validation={{
              required: "Senha é obrigatória",
              minLength: {
                value: 6,
                message: "A senha deve ter pelo menos 6 caracteres",
              },
            }}
          />
          <HiddenRoleInput value="user" register={register} />
          <SubmitButton
            label="Criar conta"
            bgColor="roxo-primario"
            hoverColor="rosa-forte"
          />
        </form>
      </div>
    </div>
  );
};
