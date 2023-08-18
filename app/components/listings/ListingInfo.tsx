'use client';

import dynamic from "next/dynamic";
import { IconType } from "react-icons";

import useCountries from "@/app/hooks/useCountries";
import { SafeUser, SafeReview} from "@/app/types";

import Avatar from "../Avatar";
import ListingCategory from "./ListingCategory";
import getReviews from "@/app/actions/getReviews";
import { useEffect } from "react";
import ReviewBox from "@/app/components/ReviewBox";

const Map = dynamic(() => import('../Map'), { 
  ssr: false 
});

interface ListingInfoProps {
  user: SafeUser,
  reviews?: SafeReview[],
  description: string;
  guestCount: number;
  roomCount: number;
  bathroomCount: number;
  category: {
    icon: IconType,
    label: string;
    description: string;
  } | undefined
  locationValue: string;
}

const ListingInfo: React.FC<ListingInfoProps> = ({
  user,
  reviews = [],
  description,
  guestCount,
  roomCount,
  bathroomCount,
  category,
  locationValue,
}) => {
  const { getByValue } = useCountries();

  const coordinates = getByValue(locationValue)?.latlng

  useEffect(() => {
    const fetchReviews = async () => {
      const reviews = await getReviews({ userId: user.id });

      return reviews;
    }

    fetchReviews();
  })



  return ( 
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div 
          className="
            text-xl 
            font-semibold 
            flex 
            flex-row 
            items-center
            gap-2
          "
        >
          <div>{user?.name}</div>
          <Avatar src={user?.image} />
        </div>
        <div className="
            flex 
            flex-row 
            items-center 
            gap-4 
            font-light
            text-neutral-500
          "
        >
          <div>
            {guestCount} hours/week
          </div>
          <div>
            {roomCount} cases
          </div>
        </div>
      </div>
      <hr />
      {category && (
        <ListingCategory
          icon={category.icon} 
          label={category?.label}
          description={category?.description} 
        />
      )}
      <hr />
      <div className="
      text-lg font-light text-neutral-500">
        {description}
      </div>
      <hr />
      <Map center={coordinates} />
      <div 
        className="
          mt-10
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gap-8
        "
      >
        {reviews.map((review: any) => (
          <ReviewBox
            key={review.id}
            professionalCompetence={review.professionalCompetence}
            reliability={review.reliability}
            interpersonalSkills={review.interpersonalSkills}
            trustworthiness={review.trustworthiness}
            overallImage={review.overallImage}
            briefStatement={review.briefStatement}
          />
        ))}
      </div>
    </div>
   );
}
 
export default ListingInfo;