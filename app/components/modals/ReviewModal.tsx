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

import useReviewModal from '@/app/hooks/useReviewModal';

import Modal from "./Modal";
import Counter from '../inputs/Counter';
import Heading from '../Heading';
import TextArea from '../inputs/TextArea';


const ReviewModal = () => {
  const router = useRouter();
  const reviewModal = useReviewModal();

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
        professionalCompetence: 3,
        reliability: 3,
        interpersonalSkills: 3,
        trustworthiness: 3,
        overallImage: 3,
        briefStatement: ''
    }
  });

    const professionalCompetence = watch('professionalCompetence');
    const reliability= watch('reliability');
    const interpersonalSkills= watch('interpersonalSkills');
    const trustworthiness= watch('trustworthiness');
    const overallImage= watch('overallImage');

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true
    })
  }

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    
    setIsLoading(true);

    axios.post('/api/reviews', data)
    .then(() => {
      toast.success('Review Submitted!');
      router.refresh();
      reset();
      reviewModal.onClose();
    })
    .catch(() => {
      toast.error('Something went wrong.');
    })
    .finally(() => {
      setIsLoading(false);
    })
  }

  const actionLabel = useMemo(() => {
    return 'Post Review'
  }, []);

  const secondaryActionLabel = useMemo(() => {
    return undefined
  }, []);

  let bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Review the Expert's Performance"
          subtitle="Please provide a short description if at all possible."
        />
        <Counter 
          onChange={(value) => {
            setCustomValue('professionalCompetence', value)
          }}
          value={professionalCompetence}
          title="Professional Competence"
          subtitle="Out of 5"
        />
        <hr />
        <Counter 
          onChange={(value) => {
            setCustomValue('reliability', value)
          }}
          value={reliability}
          title="Reliability"
          subtitle="Out of 5"
        />
        <hr />
        <Counter 
          onChange={(value) => {
            setCustomValue('interpersonalSkills', value)
          }}
          value={interpersonalSkills}
          title="Interpersonal Skills"
          subtitle="Out of 5"
        />
        <hr />
        <Counter 
          onChange={(value) => {
            setCustomValue('trustworthiness', value)
          }}
          value={trustworthiness}
          title="Trustworthiness"
          subtitle="Out of 5"
        />
        <hr />
        <Counter 
          onChange={(value) => {
            setCustomValue('overallImage', value)
          }}
          value={overallImage}
          title="Overall Image"
          subtitle="Out of 5"
        />
        <hr />
        <TextArea
          id="briefStatement"
          label=""
          disabled={isLoading}
          register={register}
          errors={errors}
        />
      </div>
    )

  return (
    <Modal
      disabled={isLoading}
      isOpen={reviewModal.isOpen}
      title="Provide Review"
      actionLabel={actionLabel}
      onSubmit={handleSubmit(onSubmit)}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={undefined}
      onClose={reviewModal.onClose}
      body={bodyContent}
    />
  );
}

export default ReviewModal;
