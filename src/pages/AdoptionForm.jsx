import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { InputField } from "../components/InputField";
import { SelectField } from "../components/SelectField";
import { SubmitButton } from "../components/SubmitButton";
import bgDog1 from "../assets/bg-dog1.png";
import bgDog2 from "../assets/bg-dog2.png";
import bgDog3 from "../assets/bg-dog3.png";
import bgDog4 from "../assets/bg-dog4.png";

export const AdoptionForm = () => {
  const [formStep, setFormStep] = useState(1);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm();

  const cepValue = watch("cep");

  useEffect(() => {
    const fetchAddress = async () => {
      const cep = cepValue?.replace(/\D/g, "");
      if (cep && cep.length === 8) {
        try {
          const response = await axios.get(
            `https://viacep.com.br/ws/${cep}/json/`
          );
          console.log("Resposta da API:", response.data);
          if (!response.data.erro) {
            setValue("rua", response.data.logradouro);
            setValue("bairro", response.data.bairro);
            setValue("cidade", response.data.localidade);
          }
        } catch (error) {
          console.error("Erro ao buscar CEP:", error);
        }
      }
    };
    fetchAddress();
  }, [cepValue, setValue]);

  const validateCPF = (cpf) => {
    const cleanCPF = cpf.replace(/[^\d]/g, "");
    if (!/^\d{11}$/.test(cleanCPF)) return "CPF inválido";
    let sum = 0;
    for (let i = 0; i < 9; i++) sum += parseInt(cleanCPF.charAt(i)) * (10 - i);
    let rev = 11 - (sum % 11);
    if (rev === 10 || rev === 11) rev = 0;
    if (rev !== parseInt(cleanCPF.charAt(9))) return "CPF inválido";

    sum = 0;
    for (let i = 0; i < 10; i++) sum += parseInt(cleanCPF.charAt(i)) * (11 - i);
    rev = 11 - (sum % 11);
    if (rev === 10 || rev === 11) rev = 0;
    if (rev !== parseInt(cleanCPF.charAt(10))) return "CPF inválido";

    return true;
  };

  const onSubmit = (data) => {
    console.log("Dados do formulário:", data);
    navigate("/congratulations");
  };

  const handleNext = () => setFormStep((prev) => prev + 1);

  return (
    <div className="bg-rosa-forte flex flex-col flex-grow min-h-[95vh] items-center justify-center relative py-6">
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
          <span className="text-verde-primario">&lt;</span>Formulário de adoção
          <span className="text-verde-primario">&gt;</span>
        </h2>

        <form
          className="my-1"
          onSubmit={handleSubmit(formStep < 3 ? handleNext : onSubmit)}
        >
          {formStep === 1 && (
            <div className="flex flex-col gap-4">
              <InputField
                label="Nome completo:"
                name="nome"
                register={register}
                validation={{ required: "Preencha todos os campos" }}
                error={errors.nome?.message}
              />
              <InputField
                label="Data de nascimento:"
                name="dataN"
                type="date"
                register={register}
                validation={{
                  required: "Informe sua data de nascimento",
                  validate: (value) => {
                    const today = new Date();
                    const birthDate = new Date(value);
                    const ageDifMs = today - birthDate;
                    const ageDate = new Date(ageDifMs); // milissegundos para data
                    const age = Math.abs(ageDate.getUTCFullYear() - 1970);

                    if (age < 18) {
                      return "Você deve ter pelo menos 18 anos";
                    }
                    if (age > 100) {
                      return "Idade máxima permitida é 100 anos";
                    }
                    return true;
                  },
                }}
                error={errors.dataN?.message}
              />

              <InputField
                label="CPF:"
                name="cpf"
                placeholder="000.000.000-00"
                register={register}
                validation={{
                  required: "Digite seu CPF",
                  validate: validateCPF,
                }}
                error={errors.cpf?.message}
              />
              <SelectField
                label="Estado civil:"
                name="ec"
                options={[
                  { value: "solteiro", label: "Solteiro(a)" },
                  { value: "casado", label: "Casado(a)" },
                  { value: "divorciado", label: "Divorciado(a)" },
                  { value: "viuvo", label: "Viúvo(a)" },
                ]}
                register={register}
                validation={{ required: "Campo obrigatório" }}
                error={errors.ec?.message}
              />
              <InputField
                label="Profissão:"
                name="profissao"
                register={register}
              />
              <InputField
                label="Celular:"
                name="cel"
                type="tel"
                placeholder="(00) 0 0000-0000"
                register={register}
                validation={{
                  pattern: {
                    value: /^\(?\d{2}\)?[\s-]?9?\d{4}-?\d{4}$/,
                    message: "Número inválido",
                  },
                }}
                error={errors.cel?.message}
              />
              <SubmitButton label="Próximo" />
            </div>
          )}

          {formStep === 2 && (
            <div className="flex flex-col gap-4">
              <InputField
                label="CEP:"
                name="cep"
                placeholder="00000-000"
                register={register}
                validation={{
                  required: "Informe o CEP",
                  pattern: {
                    value: /^\d{5}-?\d{3}$/,
                    message: "CEP inválido",
                  },
                }}
                error={errors.cep?.message}
              />
              <InputField
                label="Rua:"
                name="rua"
                placeholder="Ex: Rua das Acácias"
                register={register}
                validation={{ required: "Informe a rua" }}
                error={errors.rua?.message}
                defaultValue={watch("rua")}
              />
              <InputField
                label="Bairro:"
                name="bairro"
                placeholder="Ex: Centro"
                register={register}
                validation={{ required: "Informe o bairro" }}
                error={errors.bairro?.message}
                defaultValue={watch("bairro")}
              />
              <InputField
                label="Número:"
                name="numero"
                placeholder="Ex: 123"
                register={register}
                validation={{ required: "Informe o número" }}
                error={errors.numero?.message}
              />
              <InputField
                label="Cidade:"
                name="cidade"
                placeholder="Ex: Fortaleza"
                register={register}
                validation={{ required: "Informe a cidade" }}
                error={errors.cidade?.message}
                defaultValue={watch("cidade")}
              />
              <SubmitButton label="Próximo" />
            </div>
          )}

          {formStep === 3 && (
            <div className="flex flex-col gap-4">
              <SelectField
                label="Está disponível para arcar com custos de vacina, ração, consultas veterinárias e castração?"
                name="custos"
                options={[
                  { value: "sim", label: "Sim" },
                  { value: "nao", label: "Não" },
                ]}
                register={register}
                validation={{ required: "Campo obrigatório" }}
                error={errors.custos?.message}
              />
              <SelectField
                label="Sabe que a adoção é um compromisso para a vida toda do animal (10 a 20 anos)?"
                name="compromisso"
                options={[
                  { value: "sim", label: "Sim" },
                  { value: "nao", label: "Não" },
                ]}
                register={register}
                validation={{ required: "Campo obrigatório" }}
                error={errors.compromisso?.message}
              />
              <SelectField
                label="Está ciente de que a ONG pode fazer visitas ou acompanhamento pós-adoção?"
                name="visitas"
                options={[
                  { value: "sim", label: "Sim" },
                  { value: "nao", label: "Não" },
                ]}
                register={register}
                validation={{ required: "Campo obrigatório" }}
                error={errors.visitas?.message}
              />
              <SelectField
                label="Aceita assinar um termo de responsabilidade?"
                name="termo"
                options={[
                  { value: "sim", label: "Sim" },
                  { value: "nao", label: "Não" },
                ]}
                register={register}
                validation={{ required: "Campo obrigatório" }}
                error={errors.termo?.message}
              />
              <SubmitButton label="Finalizar" />
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
