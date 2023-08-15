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
import Input from '../inputs/Input';
import Heading from '../Heading';
import SpecialitySelect, { SpecialitySelectValue } from '../inputs/SpecialitySelect';


const RequestExpertModal = () => {
  const router = useRouter();
  const requestExpertModal = useRequestExpertModal();

  const [isLoading, setIsLoading] = useState(false);

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

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    
    setIsLoading(true);

    axios.post('/api/requests', data)
    .then(() => {
      toast.success('Request Submitted!');
      router.refresh();
      reset();
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
    return 'Request'
  }, []);

  const secondaryActionLabel = useMemo(() => {
    return undefined
  }, []);

  let bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Give us information about your requirements"
          subtitle="Short works best!"
        />
        <SpecialitySelect 
        value={category} 
        onChange={(value) => 
          setCustomValue('category', value)} 
        />
        <hr />
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

  return (
    <Modal
      disabled={isLoading}
      isOpen={requestExpertModal.isOpen}
      title="Request Expert"
      actionLabel={actionLabel}
      onSubmit={handleSubmit(onSubmit)}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={undefined}
      onClose={requestExpertModal.onClose}
      body={bodyContent}
    />
  );
}

export default RequestExpertModal;
