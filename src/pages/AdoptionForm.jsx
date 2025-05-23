import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
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
  } = useForm();

  const onSubmit = (data) => {
    console.log("Dados do formulário:", data);
    navigate("/congratulations");
  };

  const handleNext = () => setFormStep((prev) => prev + 1);

  return (
    <div className="bg-rosa-forte flex flex-col flex-grow min-h-[95vh] items-center justify-center relative">
      {/* Background images */}
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

        <form className="my-4" onSubmit={handleSubmit(formStep < 3 ? handleNext : onSubmit)}>
          {formStep === 1 && (
            <div className="flex flex-col gap-4">
              <InputField
                label="Nome completo:"
                name="nome"
                placeholder=""
                register={register}
                validation={{ required: "Preencha todos os campos" }}
                error={errors.nome?.message}
              />
              <InputField
                label="Data de nascimento:"
                name="dataN"
                type="date"
                register={register}
                validation={{ required: "Informe sua data de nascimento" }}
                error={errors.dataN?.message}
              />
              <InputField
                label="CPF:"
                name="cpf"
                placeholder="000.000.000-00"
                register={register}
                validation={{ required: "Digite seu CPF" }}
                error={errors.cpf?.message}
              />
              <SelectField
                label="Estado civil:"
                name="ec"
                options={[
                  { value: "solteiro", label: "Solteiro(a)" },
                  { value: "casado", label: "Casado(a)" },
                ]}
                register={register}
                validation={{ required: "Campo obrigatório" }}
                error={errors.ec?.message}
              />
              <InputField
                label="Profissão:"
                name="profissao"
                placeholder=""
                register={register}
              />
              <InputField
                label="Celular:"
                name="cel"
                type="tel"
                placeholder="(00) 0 0000-0000"
                register={register}
              />
              <SubmitButton label="Próximo" />
            </div>
          )}

          {formStep === 2 && (
            <div className="flex flex-col">
              <div className="max-w-50 ">
                <InputField
                  label="CEP:"
                  name="cep"
                  placeholder="00000-000"
                  register={register}
                  validation={{ required: "Informe o CEP" }}
                  error={errors.cep?.message}
                />
              </div>
              <InputField
                label="Rua:"
                name="rua"
                placeholder="Ex: Rua das Acácias"
                register={register}
                validation={{ required: "Informe a rua" }}
                error={errors.rua?.message}
              />
              <div className="flex flex-col sm:flex-row gap-4">
                <InputField
                  label="Bairro:"
                  name="bairro"
                  placeholder="Ex: Centro"
                  register={register}
                  validation={{ required: "Informe o bairro" }}
                  error={errors.bairro?.message}
                />
                <div className="max-w-30">
                  <InputField
                    label="Número:"
                    name="numero"
                    placeholder="Ex: 123"
                    register={register}
                    validation={{ required: "Informe o número" }}
                    error={errors.numero?.message}
                  />
                </div>
              </div>
              <InputField
                label="Cidade:"
                name="cidade"
                placeholder="Ex: Fortaleza"
                register={register}
                validation={{ required: "Informe a cidade" }}
                error={errors.cidade?.message}
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