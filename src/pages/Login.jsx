import { useForm } from "react-hook-form";
import { InputField } from "../components/InputField";
import { SubmitButton } from "../components/SubmitButton";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { loginUser } from "../api/auth";

import bgDog1 from "../assets/bg-dog1.png";
import bgDog2 from "../assets/bg-dog2.png";
import bgDog3 from "../assets/bg-dog3.png";
import bgDog4 from "../assets/bg-dog4.png";
import { useAuth } from "../contexts/AuthContext";


export const Login = () => {
  const { login } = useAuth();
  // eslint-disable-next-line no-unused-vars
  const [userData, setUserData] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const user = await loginUser(data);
      login(user);
    } catch (error) {
      toast.error("Email ou senha inválidos");
      console.error(error);
    }
  };

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUserData(JSON.parse(savedUser));
    }
  }, []);

  return (
    <div className="relative pt-45 bg-rosa-forte flex flex-col flex-grow min-h-[95vh] items-center justify-center">
      <div className="absolute bottom-0 right-0 hidden lg:block w-[250px]">
        <img className="w-full" src={bgDog1} alt="Desenho de cachorro" />
      </div>
      <div className="absolute bottom-0 left-0 hidden lg:block w-[250px]">
        <img className="w-full" src={bgDog2} alt="Desenho de cachorro" />
      </div>
      <div className="absolute bottom-[230px] right-0 hidden lg:block w-[250px]">
        <img className="w-full" src={bgDog3} alt="Desenho de cachorro" />
      </div>
      <div className="absolute bottom-[230px] left-0 hidden lg:block w-[250px]">
        <img className="w-full" src={bgDog4} alt="Desenho de cachorro" />
      </div>
      <div className="bg-white p-[30px] flex flex-col justify-center w-[90%] sm:w-[500px] rounded-xs">
        <h2 className="font-bold text-xl text-center mb-2 sm:text-2xl">
          <span className="text-verde-primario">&lt;</span>Faça seu Login
          <span className="text-verde-primario">&gt;</span>
        </h2>
        <small className="text-dark text-center">
          Não possui uma conta? Cadastre-se{" "}
          <Link className="underline" to="/signup">
            aqui
          </Link>
        </small>

        <form onSubmit={handleSubmit(onSubmit)} className="my-4">
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
            name="senha"
            type="password"
            placeholder="Insira sua senha"
            register={register}
            error={errors.senha?.message}
            validation={{
              required: "Senha é obrigatória",
              minLength: {
                value: 6,
                message: "A senha deve ter pelo menos 6 caracteres",
              },
            }}
          />

          <SubmitButton
            label="Entrar"
            bgColor="verde-primario"
          />
        </form>
      </div>
    </div>
  );
};
