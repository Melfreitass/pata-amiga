import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "../../schema/formSchema";

import {
    FaPaw,
    FaUser,
    FaDog,
    FaPhone,
    FaCalendarCheck,
    FaClipboardList,
} from "react-icons/fa";

import styles from "./Formulario.module.css";

export default function Formulario() {
    const [enviado, setEnviado] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = (data) => {
    console.log("Dados do formulário:", data);
    setEnviado(true);
};

    return (
        <section id="agendamento" className={styles.page}>

            <section className={styles.bookingSection}>

                <div className={styles.info}>

                    <div className={styles.tag}>
                        <FaClipboardList />
                        <span>AGENDAMENTO RÁPIDO</span>
                    </div>

                    <h1>
                        Marque o próximo cuidado
                        <br />
                        do seu pet
                    </h1>

                    <p>
                        Preencha a etiqueta ao lado com os dados do
                        tutor e do pet. Nossa equipe confirma por
                        telefone em até 1 hora.
                    </p>

                    <div className={styles.benefits}>

                        <div className={styles.benefit}>
                            <span className={styles.dot}></span>
                            <span>Resposta em até 1 hora útil</span>
                        </div>

                        <div className={styles.benefit}>
                            <span className={styles.dot}></span>
                            <span>Sem taxa de agendamento</span>
                        </div>

                        <div className={styles.benefit}>
                            <span className={styles.dot}></span>
                            <span>Cancelamento flexível</span>
                        </div>

                    </div>

                </div>

                <div className={styles.formCard}>

                    <div className={styles.cardIcon}>
                        <FaPaw />
                    </div>

                    <div className={styles.formHeader}>
                        <h2>Etiqueta de agendamento</h2>

                        <p>
                            Todos os campos são obrigatórios
                        </p>
                    </div>


                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className={styles.field}>

                            <label
                                htmlFor="tutorName"
                                className={styles.label}
                            >
                                <FaUser />
                                <span>NOME DO TUTOR</span>
                            </label>

                            <input
                                id="tutorName"
                                type="text"
                                placeholder="Ex: Camila Ferreira"
                                {...register("tutorName")}
                            />

                            {errors.tutorName && (
                                <span className={styles.error}>
                                    {errors.tutorName.message}
                                </span>
                            )}

                        </div>

                        <div className={styles.row}>

                            <div className={styles.field}>

                                <label
                                    htmlFor="petName"
                                    className={styles.label}
                                >
                                    <FaPaw />
                                    <span>NOME DO PET</span>
                                </label>

                                <input
                                    id="petName"
                                    type="text"
                                    placeholder="Ex: Rex"
                                    {...register("petName")}
                                />

                                {errors.petName && (
                                    <span className={styles.error}>
                                        {errors.petName.message}
                                    </span>
                                )}

                            </div>

                            <div className={styles.field}>

                                <label
                                    htmlFor="species"
                                    className={styles.label}
                                >
                                    <FaDog />
                                    <span>ESPÉCIE</span>
                                </label>

                                <input
                                    id="species"
                                    type="text"
                                    placeholder="Ex: Cachorro"
                                    {...register("species")}
                                />

                                {errors.species && (
                                    <span className={styles.error}>
                                        {errors.species.message}
                                    </span>
                                )}

                            </div>

                        </div>

                        <div className={styles.field}>

                            <label
                                htmlFor="race"
                                className={styles.label}
                            >
                                <FaDog />
                                <span>RAÇA</span>
                            </label>

                            <input
                                id="race"
                                type="text"
                                placeholder="Ex: Labrador"
                                {...register("race")}
                            />

                            {errors.race && (
                                <span className={styles.error}>
                                    {errors.race.message}
                                </span>
                            )}

                        </div>

                        <div className={styles.field}>

                            <label
                                htmlFor="phone"
                                className={styles.label}
                            >
                                <FaPhone />
                                <span>TELEFONE</span>
                            </label>

                            <input
                                id="phone"
                                type="text"
                                placeholder="(11) 91234-5678"
                                {...register("phone")}
                            />

                            {errors.phone && (
                                <span className={styles.error}>
                                    {errors.phone.message}
                                </span>
                            )}

                        </div>

                        <div className={styles.field}>

                            <label
                                htmlFor="service"
                                className={styles.label}
                            >
                                <FaCalendarCheck />
                                <span>SERVIÇO</span>
                            </label>

                            <select
                                id="service"
                                {...register("service")}
                            >

                                <option value="">
                                    Selecione um serviço
                                </option>

                                <option value="Banho e Tosa">
                                    Banho e Tosa
                                </option>

                                <option value="Consulta Veterinária">
                                    Consulta Veterinária
                                </option>

                                <option value="Hospedagem">
                                    Hospedagem
                                </option>

                                <option value="Adestramento">
                                    Adestramento
                                </option>

                            </select>

                            {errors.service && (
                                <span className={styles.error}>
                                    {errors.service.message}
                                </span>
                            )}

                        </div>


                        <button
                            type="submit"
                            className={styles.submitButton}
                        >
                            <span>Confirmar agendamento</span>
                            <FaPaw />
                        </button>

                    </form>

                    {enviado && (
    <div className={styles.sucesso}>
        <FaPaw />
        <h3>Formulário enviado com sucesso! 🐾</h3>
        <p>
            Recebemos seus dados. Nossa equipe entrará em contato em breve.
        </p>
    </div>
)}

                </div>

            </section>

        </section>
    );
}