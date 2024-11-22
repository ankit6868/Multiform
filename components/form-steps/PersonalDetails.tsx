"use client";

import { Input } from '@/components/ui/input';
import { FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { UseFormReturn } from 'react-hook-form';
import { FormSchema } from '@/lib/form-schema';

interface PersonalDetailsProps {
  form: UseFormReturn<FormSchema>;
}

export function PersonalDetails({ form }: PersonalDetailsProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-semibold mb-6">Please fill in your details</h3>
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <Input
              placeholder="Enter your name"
              {...field}
              className="w-full"
            />
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <Input
              placeholder="Enter your email address"
              type="email"
              {...field}
              className="w-full"
            />
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}