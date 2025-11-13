import {z} from "zod/v4";

export const loginFormValidationSchema = z.object({
    login: z.email(),
    password: z.string()
})