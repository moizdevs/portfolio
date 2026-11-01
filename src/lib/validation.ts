import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Please enter a valid email").max(120),
  subject: z.string().trim().min(3, "Please add a short subject").max(120),
  message: z.string().trim().min(10, "Message should be at least 10 characters").max(2000),
  // Honeypot: real users leave this empty.
  website: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
