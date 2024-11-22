"use client";

import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { FormField } from '@/components/ui/form';
import { UseFormReturn } from 'react-hook-form';
import { FormSchema } from '@/lib/form-schema';

interface TimeframeSelectionProps {
  form: UseFormReturn<FormSchema>;
}

export function TimeframeSelection({ form }: TimeframeSelectionProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-semibold mb-6">Specify your time-frame</h3>
      <FormField
        control={form.control}
        name="timeframe"
        render={({ field }) => (
          <Slider
            defaultValue={[field.value]}
            max={18}
            step={1}
            onValueChange={([value]) => field.onChange(value)}
            className="mb-8"
          />
        )}
      />
      <FormField
        control={form.control}
        name="longTermPartnership"
        render={({ field }) => (
          <div className="flex items-center space-x-2">
            <Checkbox
              id="longTerm"
              checked={field.value}
              onCheckedChange={field.onChange}
            />
            <label htmlFor="longTerm" className="text-sm font-medium leading-none">
              I&apos;m looking for a long-term partnership
            </label>
          </div>
        )}
      />
    </div>
  );
}