import { z } from "zod";

export const ProfileSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  full_name: z.string().optional(),
  avatar_url: z.string().optional(),
  stripe_id: z.string(),
});

export type ProfileRecord = z.infer<typeof ProfileSchema>;
