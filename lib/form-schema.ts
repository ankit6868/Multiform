import * as z from 'zod';

export const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().min(10, 'Please provide more details about your company'),
  services: z.array(z.string()).min(1, 'Please select at least one service'),
  timeframe: z.number().min(1).max(18),
  longTermPartnership: z.boolean(),
  budget: z.number().min(2000).max(25000),
  stockCompensation: z.boolean(),
});

export type FormSchema = z.infer<typeof formSchema>;