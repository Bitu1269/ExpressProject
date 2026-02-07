

import { z } from "zod";

export const createUserDTO = z.object({
    name: z.string().min(3, "Name must be at least 3 chars"),
    email: z.string().email("Invalid email"),
    age: z.number().min(18, "Age must be greater than 18"),
    city: z.string(),
    company: z.string(),
    active: z.boolean()
});

export const updateUserDTO = z.object({
    name: z.string().min(3).optional(),
    email: z.string().email().optional(),
    age: z.number().min(18).optional(),
    city: z.string().optional(),
    company: z.string().optional(),
    active: z.boolean().optional()
});