'use client';

import { toast } from "react-hot-toast";
import axios from "axios";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import useLoginModal from "@/app/hooks/useLoginModal";
import useReviewModal from "@/app/hooks/useReviewModal";

import { SafeReservation, SafeUser } from "@/app/types";

import Heading from "@/app/components/Heading";
import Container from "@/app/components/Container";
import ListingCard from "@/app/components/listings/ListingCard";

interface TripsClientProps {
  reservations: SafeReservation[],
  currentUser?: SafeUser | null,
}

const TripsClient: React.FC<TripsClientProps> = ({
  reservations,
  currentUser
}) => {
  const router = useRouter();
  const reviewModal = useReviewModal();
  const loginModal = useLoginModal();
  const [deletingId, setDeletingId] = useState('');

  const onCancel = useCallback((id: string) => {
    setDeletingId(id);

    axios.delete(`/api/reservations/${id}`)
    .then(() => {
      toast.success('Terminated');
      router.refresh();
    })
    .catch((error) => {
      toast.error(error?.response?.data?.error)
    })
    .finally(() => {
      setDeletingId('');
    })
  }, [router]);

  const onReview = useCallback((id: string) => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    reviewModal.onOpen(id);
  }, [loginModal, reviewModal, currentUser]);

  return (
    <Container>
      <Heading
        title="Hired Expert Witnesses"
        subtitle="List of expert witnesses in your employ"
      />
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
        {reservations.map((reservation: any) => (
          <ListingCard
            key={reservation.id}
            data={reservation.listing}
            reservation={reservation}
            actionId={reservation.id}
            actionId2={reservation.listingId}
            onAction={onCancel}
            onAction2={onReview}
            disabled={deletingId === reservation.id}
            actionLabel="Cancel job"
            actionLabel2="Leave Review"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
   );
}
 
export default TripsClient;