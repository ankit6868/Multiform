"use client";

import { Textarea } from '@/components/ui/textarea';
import { FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { UseFormReturn } from 'react-hook-form';
import { FormSchema } from '@/lib/form-schema';

interface CompanyInfoProps {
  form: UseFormReturn<FormSchema>;
}

export function CompanyInfo({ form }: CompanyInfoProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-semibold mb-6">About your Company</h3>
      <FormField
        control={form.control}
        name="company"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Company Details</FormLabel>
            <Textarea
              placeholder="Tell me a bit about your start-up, company or organization."
              {...field}
              className="w-full h-32"
            />
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}