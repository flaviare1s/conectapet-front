import { useForm } from "react-hook-form";
import { InputField } from "../components/InputField";
import { SubmitButton } from "../components/SubmitButton";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { fetchUsers } from "../api/auth";

import bgDog1 from "../assets/bg-dog1.png"
import bgDog2 from "../assets/bg-dog2.png"
import bgDog3 from "../assets/bg-dog3.png"
import bgDog4 from "../assets/bg-dog4.png"

export const Login = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [userData, setUserData] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const users = await fetchUsers();

      const user = users.find(
        (user) => user.email === data.email && user.password === data.password
      );

      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        setUserData(user);

        if (user.role === "user") {
          navigate("/pets");
        } else if (user.role === "guardian") {
          navigate("/pets/add");
        }
      } else {
        toast.error("Usuário ou senha incorretos");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      toast.error("Erro ao conectar com o servidor");
    }
  };

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUserData(JSON.parse(savedUser));
    }
  }, []);

  return (
    <div className="bg-rosa-forte flex flex-col flex-grow min-h-[95vh] items-center justify-center relative">
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
          <span className="text-verde-primario">&lt;</span>Faça seu Login
          <span className="text-verde-primario">&gt;</span>
        </h2>
        <small className="text-dark text-center">
          Não possui uma conta? Cadastre-se{" "}
          <a className="underline" href="/signup">
            aqui
          </a>
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

          <SubmitButton
            label="Entrar"
            bgColor="verde-primario"
            hoverColor="verde-piscina"
          />
        </form>
      </div>
    </div>
  );
};
