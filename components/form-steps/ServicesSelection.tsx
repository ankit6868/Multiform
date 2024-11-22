"use client";

import { Checkbox } from '@/components/ui/checkbox';
import { FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { UseFormReturn } from 'react-hook-form';
import { FormSchema } from '@/lib/form-schema';

interface ServicesSelectionProps {
  form: UseFormReturn<FormSchema>;
}

const SERVICES = ['UI Design', 'UI Development', 'Marketing Site', 'General'];

export function ServicesSelection({ form }: ServicesSelectionProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-semibold mb-6">How can I help you?</h3>
      <FormField
        control={form.control}
        name="services"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Select Services</FormLabel>
            <div className="grid grid-cols-2 gap-4">
              {SERVICES.map((service) => (
                <div key={service} className="flex items-center space-x-2">
                  <Checkbox
                    id={service}
                    checked={field.value?.includes(service)}
                    onCheckedChange={(checked) => {
                      const current = field.value || [];
                      const updated = checked
                        ? [...current, service]
                        : current.filter((s) => s !== service);
                      field.onChange(updated);
                    }}
                  />
                  <label
                    htmlFor={service}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {service}
                  </label>
                </div>
              ))}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}