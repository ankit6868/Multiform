"use client";

import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { FormField } from '@/components/ui/form';
import { UseFormReturn } from 'react-hook-form';
import { FormSchema } from '@/lib/form-schema';

interface BudgetSelectionProps {
  form: UseFormReturn<FormSchema>;
}

export function BudgetSelection({ form }: BudgetSelectionProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-semibold mb-6">Specify your budget</h3>
      <FormField
        control={form.control}
        name="budget"
        render={({ field }) => (
          <Slider
            defaultValue={[field.value]}
            min={2000}
            max={25000}
            step={100}
            onValueChange={([value]) => field.onChange(value)}
            className="mb-8"
          />
        )}
      />
      <FormField
        control={form.control}
        name="stockCompensation"
        render={({ field }) => (
          <div className="flex items-center space-x-2">
            <Checkbox
              id="stock"
              checked={field.value}
              onCheckedChange={field.onChange}
            />
            <label htmlFor="stock" className="text-sm font-medium leading-none">
              I&apos;m interested in discussing stock compensation
            </label>
          </div>
        )}
      />
    </div>
  );
}