'use client';

import qs from 'query-string';
import dynamic from 'next/dynamic'
import { useCallback, useMemo, useState } from "react";
import { Range } from 'react-date-range';
import { formatISO } from 'date-fns';
import { useRouter, useSearchParams } from 'next/navigation';

import useSearchModal from "@/app/hooks/useSearchModal";

import Modal from "./Modal";
import Counter from "../inputs/Counter";
import CountrySelect, { 
  CountrySelectValue
} from "../inputs/CountrySelect";
import Heading from '../Heading';

enum STEPS {
  LOCATION = 0,
  INFO = 1,
}

const SearchModal = () => {
  const router = useRouter();
  const searchModal = useSearchModal();
  const params = useSearchParams();

  const [step, setStep] = useState(STEPS.LOCATION);

  const [location, setLocation] = useState<CountrySelectValue>();
  const [guestCount, setGuestCount] = useState(1);
  const [roomCount, setRoomCount] = useState(1);
  const [bathroomCount, setBathroomCount] = useState(1);

  const Map = useMemo(() => dynamic(() => import('../Map'), { 
    ssr: false 
  }), []);

  const onBack = useCallback(() => {
    setStep((value) => value - 1);
  }, []);

  const onNext = useCallback(() => {
    setStep((value) => value + 1);
  }, []);

  const onSubmit = useCallback(async () => {
    if (step !== STEPS.INFO) {
      return onNext();
    }

    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString())
    }

    const updatedQuery: any = {
      ...currentQuery,
      locationValue: location?.value,
      guestCount,
      roomCount,
      bathroomCount
    };

    const url = qs.stringifyUrl({
      url: '/',
      query: updatedQuery,
    }, { skipNull: true });

    setStep(STEPS.LOCATION);
    searchModal.onClose();
    router.push(url);
  }, 
  [
    step, 
    searchModal, 
    location, 
    router, 
    guestCount, 
    roomCount,
    onNext,
    bathroomCount,
    params
  ]);

  const actionLabel = useMemo(() => {
    if (step === STEPS.INFO) {
      return 'Search'
    }

    return 'Next'
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.LOCATION) {
      return undefined
    }

    return 'Back'
  }, [step]);

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="Expert Location"
        subtitle="Find an expert near you"
      />
      <CountrySelect 
        value={location} 
        onChange={(value) => 
          setLocation(value as CountrySelectValue)} 
      />
      <hr />
      <Map center={location?.latlng} />
    </div>
  )

  if (step === STEPS.INFO) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Minimum Qualification Requirements"
          subtitle="What time commitment do you require and how many years of experience do you wish for in an expert witness?"
        />
        <Counter 
          onChange={(value) => setGuestCount(value)}
          value={guestCount}
          title="Hours" 
          subtitle="How many hours per week do you need?"
        />
        <hr />
        <Counter 
          onChange={(value) => setRoomCount(value)}
          value={roomCount}
          title="Experience" 
          subtitle="How many cases do you want the expert witness to have worked on?"
        />
      </div>
    )
  }

  return (
    <Modal
      isOpen={searchModal.isOpen}
      title="Filters"
      actionLabel={actionLabel}
      onSubmit={onSubmit}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.LOCATION ? undefined : onBack}
      onClose={searchModal.onClose}
      body={bodyContent}
    />
  );
}

export default SearchModal;
