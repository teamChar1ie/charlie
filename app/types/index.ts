import { Listing, Reservation, User } from "@prisma/client";

export type SafeListing = Omit<Listing, "createdAt"> & {
  createdAt: string;
};

export type SafeReservation = Omit<
  Reservation, 
  "createdAt" | "startDate" | "endDate" | "listing"
> & {
  createdAt: string;
  startDate: string;
  endDate: string;
  listing: SafeListing;
};

export type SafeReview = Omit<
  Review, 
  'professionalCompetence' | 'reliability' | 'interpersonalSkills' | 'trustworthiness' | 'overallImage' | 'briefStatement' | "listing"
> & {
  professionalCompetence: number;
  reliability: number;
  interpersonalSkills: number;
  trustworthiness: number;
  overallImage: number; 
  briefStatement: string;
  listing: SafeListing;
};

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};
