import { z } from "zod";

const envSchema = z.object({
  PORT: z.coerce.number().default(3000),

  DATABASE_HOST: z.string(),
  DATABASE_PORT: z.coerce.number().default(3306),
  DATABASE_USER: z.string(),
  DATABASE_PASSWORD: z.string(),
  DATABASE_NAME: z.string(),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error("Invalid environment variables:");
  console.error(parsedEnv.error.flatten().fieldErrors);

  process.exit(1);
}

export const env = parsedEnv.data;