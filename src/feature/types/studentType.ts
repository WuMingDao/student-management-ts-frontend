import * as z from "zod";

export const studentFormSchema = z.object({
  id: z.string().min(1, "ID is required"),
  name: z.string().min(1, "Name is required"),
  //   email: z.string().email("Invalid email address").min(1, "Email is required"),
  //
  gender: z.string().min(1, "Gender is required"),
  classInfo: z.string().min(1, "Class info is required"),
  avatar: z.string().min(1, "Avatar is required"),
});

export type StudentType = z.infer<typeof studentFormSchema>;
