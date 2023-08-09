'use client';

import axios from 'axios';
import { toast } from 'react-hot-toast';
import { 
  FieldValues, 
  SubmitHandler, 
  useForm
} from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from "react";

import useRequestExpertModal from '@/app/hooks/useRequestExpertModal';

import Modal from "./Modal";
import CategoryInput from '../inputs/CategoryInput';
import { categories } from '../navbar/Categories';
import Input from '../inputs/Input';
import Heading from '../Heading';

enum STEPS {
    CATEGORY = 0,
    DESCRIPTION = 1,
  }

const RequestExpertModal = () => {
  const router = useRouter();
  const requestExpertModal = useRequestExpertModal();

  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(STEPS.CATEGORY);

  const { 
    register, 
    handleSubmit,
    setValue,
    watch,
    formState: {
      errors,
    },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      casetype: '',
      lawfirm: '',
      category: '',
      moreinfo: ''
    }
  });

  const category = watch('category');

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true
    })
  }

  const onBack = () => {
    setStep((value) => value - 1);
  }

  const onNext = () => {
    setStep((value) => value + 1);
  }

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (step !== STEPS.DESCRIPTION) {
      return onNext();
    }
    
    setIsLoading(true);

    axios.post('/api/requests', data)
    .then(() => {
      toast.success('Request Submitted!');
      router.refresh();
      reset();
      setStep(STEPS.CATEGORY)
      requestExpertModal.onClose();
    })
    .catch(() => {
      toast.error('Something went wrong.');
    })
    .finally(() => {
      setIsLoading(false);
    })
  }

  const actionLabel = useMemo(() => {
    if (step === STEPS.DESCRIPTION) {
      return 'Request'
    }

    return 'Next'
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.CATEGORY) {
      return undefined
    }

    return 'Back'
  }, [step]);

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="Which of these best describes your speciality?"
        subtitle="Pick a category"
      />
      <div 
        className="
          grid 
          grid-cols-1 
          md:grid-cols-2 
          gap-3
          max-h-[50vh]
          overflow-y-auto
        "
      >
        {categories.map((item) => (
          <div key={item.label} className="col-span-1">
            <CategoryInput
              onClick={(category) => 
                setCustomValue('category', category)}
              selected={category === item.label}
              label={item.label}
              icon={item.icon}
            />
          </div>
        ))}
      </div>
    </div>
  )

  if (step === STEPS.DESCRIPTION) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Give us more information about your requirements"
          subtitle="Short works best!"
        />
        <Input
          id="casetype"
          label="Case Type"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <hr />
        <Input
          id="lawfirm"
          label="Law Firm"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <hr />
        <Input
          id="moreinfo"
          label="Tell us more about your case"
          disabled={isLoading}
          register={register}
          errors={errors}
        />
      </div>
    )
  }

  return (
    <Modal
      disabled={isLoading}
      isOpen={requestExpertModal.isOpen}
      title="Request Expert"
      actionLabel={actionLabel}
      onSubmit={handleSubmit(onSubmit)}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
      onClose={requestExpertModal.onClose}
      body={bodyContent}
    />
  );
}

export default RequestExpertModal;
