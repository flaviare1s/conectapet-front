import { useForm } from "react-hook-form";
import { InputField } from "../components/InputField";
import { SubmitButton } from "../components/SubmitButton";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

export const Login = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null); // Estado para armazenar os dados do usuário

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Dados enviados:", data);

    const user = users.find(
      (user) => user.email === data.email && user.password === data.password
    );

    if (user) {
      // Salvar no localStorage
      localStorage.setItem("user", JSON.stringify(user));

      // Atualizar o estado local
      setUserData(user);

      // Redirecionar de acordo com o papel do usuário
      if (user.role === "user") {
        navigate("/pets");
      } else if (user.role === "guardian") {
        navigate("/pets/add");
      }
    } else {
      toast.error("Usuário ou senha incorretos");
    }
  };

  useEffect(() => {
    // Verificar se há um usuário salvo no localStorage ao carregar a página
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUserData(JSON.parse(savedUser));
    }
  }, []);

  return (
    <div className="bg-rosa-forte flex flex-col flex-grow min-h-[95vh] items-center justify-center">
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
