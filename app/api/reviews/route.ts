import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(
  request: Request, 
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();
  const { 
    listingId,
    professionalCompetence,
    reliability,
    interpersonalSkills,
    trustworthiness,
    overallImage, 
    briefStatement
   } = body;

   if (!listingId || !professionalCompetence || !reliability || !interpersonalSkills || !trustworthiness || !overallImage) {
    return NextResponse.error();
  }
  
  const listingAndReview = await prisma.listing.update({
    where: {
      id: listingId 
    },
    data: {
      reviews: {
        create: {
          userId: currentUser.id,
          professionalCompetence,
          reliability,
          interpersonalSkills,
          trustworthiness,
          overallImage,
          briefStatement
        }
      }
    }
  });

  return NextResponse.json(listingAndReview);
}
