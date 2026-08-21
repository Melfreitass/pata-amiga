import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "../../schema/formSchema";
import {
    FaPaw,
    FaUser,
    FaPhone,
    FaDog,
    FaCalendarCheck,
    FaArrowRight,
} from "react-icons/fa";

import "./Formulario.module.css";

export default function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = (data) => {
        console.log("Dados do formulário:", data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <h1>Cadastro do Pet</h1>

            {/* Nome do tutor */}
            <div>
                <label>Nome do tutor</label>

                <input
                    type="text"
                    placeholder="Digite o nome do tutor"
                    {...register("tutorName")}
                />

                {errors.tutorName && (
                    <p>{errors.tutorName.message}</p>
                )}
            </div>

            {/* Nome do pet */}
            <div>
                <label>Nome do pet</label>

                <input
                    type="text"
                    placeholder="Digite o nome do pet"
                    {...register("petName")}
                />

                {errors.petName && (
                    <p>{errors.petName.message}</p>
                )}
            </div>

            {/* Espécie */}
            <div>
                <label>Espécie</label>

                <input
                    type="text"
                    placeholder="Ex: Cachorro, Gato, Coelho..."
                    {...register("species")}
                />

                {errors.species && (
                    <p>{errors.species.message}</p>
                )}
            </div>

            {/* Raça */}
            <div>
                <label>Raça</label>

                <input
                    type="text"
                    placeholder="Ex: Labrador, Siames, etc."
                    {...register("race")}
                />

                {errors.race && (
                    <p>{errors.race.message}</p>
                )}
            </div>

            {/* Telefone */}
            <div>
                <label>Telefone</label>

                <input
                    type="text"
                    placeholder="(11) 98765-4321"
                    {...register("phone")}
                />

                {errors.phone && (
                    <p>{errors.phone.message}</p>
                )}
            </div>

            {/* Serviço */}
            <div>
                <label>Serviço</label>

                <select {...register("service")}>
                    <option value="">Selecione um serviço</option>
                    <option value="Banho e Tosa">Banho e Tosa</option>
                    <option value="Consulta Veterinária">Consulta Veterinária</option>
                    <option value="Hospedagem">Hospedagem</option>
                    <option value="Adestramento">Adestramento</option>
                </select>

                {errors.service && (
                    <p>{errors.service.message}</p>
                )}
            </div>

            {/* Botão */}
            <button type="submit">
                Cadastrar
            </button>

        </form>
    );
}