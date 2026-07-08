import {z} from "zod";
export const registerSchema = z.object({
    fullName : z.string().min(3,"Full name must be at least 3 characters"),
    email: z.string().email("Please enter a valid email"),
    password:z
    .string().min(8,"password must be at least 8 characters"),
});