/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { InputField } from "../components/InputField";
import { SubmitButton } from "../components/SubmitButton";
import { HiddenRoleInput } from "../components/HiddenRoleInput";
import { createUser } from "../api/users";
import { verifyEmail } from "../api/email";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { EmailVerificationModal } from "./EmailVerificationModal";
import { useAuth } from "../contexts/AuthContext.jsx";

import bgDog1 from "../assets/bg-dog1.png";
import bgDog2 from "../assets/bg-dog2.png";
import bgDog3 from "../assets/bg-dog3.png";
import bgDog4 from "../assets/bg-dog4.png";
import { loginUser } from "../api/auth.js";

export const UserRegister = () => {
  const { login } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pendingEmail, setPendingEmail] = useState("");
  const [pendingSenha, setPendingSenha] = useState("");

  const onSubmit = async (data) => {
    try {
      await createUser(data);
      toast.success("Código de verificação enviado para o e-mail!");

      setPendingEmail(data.email);
      setPendingSenha(data.senha);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Erro no cadastro:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Erro ao cadastrar");
    }
  };

  const handleVerify = async (code) => {
    try {
      await verifyEmail({ email: pendingEmail, codigo: code });

      const loginResponse = await loginUser({
        email: pendingEmail,
        senha: pendingSenha,
      });

      login(loginResponse);
      toast.success("E-mail verificado e login realizado com sucesso!");
      setIsModalOpen(false);
    } catch (error) {
      console.error("Erro na verificação ou login:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Código inválido ou erro no login.");
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="relative pt-30 bg-verde-primario flex flex-col flex-grow min-h-[95vh] items-center justify-center">
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
          <span className="text-verde-primario">&lt;</span>Crie sua conta
          <span className="text-verde-primario">&gt;</span>
        </h2>
        <small className="text-dark text-center">
          Já possui uma conta? Entre{" "}
          <Link className="underline" to="/login">
            aqui
          </Link>
        </small>
        <form onSubmit={handleSubmit(onSubmit)} className="my-4">
          <InputField
            label="Nome *"
            name="nome"
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
          <HiddenRoleInput value="user" register={register} />
          <SubmitButton label="Criar conta" bgColor="roxo-primario" />
        </form>
      </div>

      <EmailVerificationModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        onVerify={handleVerify}
      />
    </div>
  );
};
