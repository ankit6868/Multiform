"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { cn } from '@/lib/utils';
import { formSchema, FormSchema } from '@/lib/form-schema';
import { PersonalDetails } from './form-steps/PersonalDetails';
import { CompanyInfo } from './form-steps/CompanyInfo';
import { ServicesSelection } from './form-steps/ServicesSelection';
import { TimeframeSelection } from './form-steps/TimeframeSelection';
import { BudgetSelection } from './form-steps/BudgetSelection';

const STEPS = ['Details', 'Company', 'Services', 'Timeframe', 'Budget'];

const STEP_FIELDS = {
  0: ['name', 'email'],
  1: ['company'],
  2: ['services'],
  3: ['timeframe'],
  4: ['budget'],
} as const;

export default function CollaborationForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      services: [],
      timeframe: 1,
      longTermPartnership: false,
      budget: 2000,
      stockCompensation: false,
    },
    mode: 'onChange',
  });

  const onSubmit = async (data: FormSchema) => {
    setIsSubmitting(true);
    try {
      console.log('Form submitted with data:', data);
    } finally {
      setIsSubmitting(false);
    }
  };

  const validateCurrentStep = async () => {
    const fields = STEP_FIELDS[currentStep as keyof typeof STEP_FIELDS];
    const result = await form.trigger(fields);
    return result;
  };

  const nextStep = async () => {
    const isValid = await validateCurrentStep();
    if (isValid) {
      setCurrentStep(prev => Math.min(prev + 1, STEPS.length - 1));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  const StepComponent = [
    PersonalDetails,
    CompanyInfo,
    ServicesSelection,
    TimeframeSelection,
    BudgetSelection,
  ][currentStep];

  return (
    <div className="w-full max-w-2xl bg-white rounded-lg shadow-xl p-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="space-y-6">
            <div className="text-sm text-gray-500 text-right">
              {currentStep + 1}/{STEPS.length}
            </div>

            <div className={cn("transition-all duration-300")}>
              <StepComponent form={form} />
            </div>
          </div>

          <div className="flex justify-between pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 0}
            >
              Previous
            </Button>
            
            {currentStep === STEPS.length - 1 ? (
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </Button>
            ) : (
              <Button 
                type="button" 
                onClick={nextStep}
                disabled={form.formState.isSubmitting}
              >
                Next
              </Button>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
}