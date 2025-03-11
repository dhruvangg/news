import { z } from "zod";

class Validation {
    static validate(schema: z.ZodSchema, data: any) {
        const result = schema.safeParse(data);
        if (!result.success) {
            throw new Error(result.error.message);
        }
        return result.data;
    }
}

class UserValidation extends Validation {
    static validateUser(data: any) {
        const schema = z.object({
            email: z.string().email(),
            password: z.string().min(6).max(20)
        });
        return this.validate(schema, data);
    }
}

class PostValidation extends Validation {
    static validatePost(data: any) {
        const schema = z.object({
            title: z.string().min(6).max(20),
            slug: z.string().min(6).max(20),
            content: z.string(),
            summary: z.string(),
            authorId: z.string(),
            image: z.string().optional(),
            tags: z.string().array().optional()
        });
        return this.validate(schema, data);
    }
}

export { UserValidation, PostValidation };