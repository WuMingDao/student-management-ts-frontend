import * as z from "zod";

export const scoreFromSchema = z.object({
  id: z.number().min(1, "ID is required"),
  subject: z.string().min(1, "Subject is required"),
  semester: z.string().min(1, "Semester is required"),
  score: z.number().min(1, "Score is required"),
});

export type ScoreType = z.infer<typeof scoreFromSchema>;
