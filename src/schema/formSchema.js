import { z } from "zod";

export const formSchema = z.object({
    tutorName: z
        .string()
        .nonempty("O nome do tutor é obrigatório")
        .min(2, "O nome deve ter no mínimo 2 caracteres")
        .max(50, "Máximo 50 caracteres"),

    petName: z
        .string()
        .nonempty("O nome do pet é obrigatório")
        .min(2, "O nome deve ter no mínimo 2 caracteres")
        .max(50, "Máximo 50 caracteres"),

    species: z
        .string()
        .nonempty("A espécie é obrigatória")
        .min(2, "Informe uma espécie válida"),

    race: z
        .string()
        .nonempty("A raça é obrigatória")
        .min(2, "Informe a raça do pet"),

    phone: z
        .string()
        .nonempty("O telefone é obrigatório")
        .regex(
            /^\(?\d{2}\)?\s?\d{4,5}-\d{4}$/,
            "Formato inválido. Ex: (11) 98765-4321"
        ),

    service: z
        .string()
        .nonempty("Selecione um serviço"),
});