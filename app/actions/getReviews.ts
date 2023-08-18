import prisma from "@/app/libs/prismadb";
import { SafeReview } from "../types";

interface IParams {
    listingId?: string;
    userId?: string;
    authorId?: string;
}

export default async function getReviews(
  params: IParams
) {
  try {
    const { listingId, userId, authorId } = params;

    const query: any = {};

    if (listingId) {
        query.listingId = listingId;
      };
  
      if (userId) {
        query.userId = userId;
      }
  
      if (authorId) {
        query.listing = { userId: authorId };
      }

    const reviews = await prisma.review.findMany({
      where: query,
      include: {
        listing: true
      }
    });

    const safeReviews : SafeReview[] = reviews.map(
      (review) => ({
      ...review,
      professionalCompetence: review.professionalCompetence,
      reliability: review.reliability,
      interpersonalSkills: review.interpersonalSkills,
      trustworthiness: review.trustworthiness,
      overallImage: review.overallImage,
      briefStatement: review.briefStatement,
      listing: {
        ...review.listing,
        createdAt: review.listing.createdAt.toISOString(),
      }
    }));

    return safeReviews;
  } catch (error: any) {
    throw new Error(error);
  }
}
