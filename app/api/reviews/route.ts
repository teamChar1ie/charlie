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
    reviewerId,
    userId,
    professionalCompetence,
    reliability,
    interpersonalSkills,
    trustworthiness,
    overallImage, 
    briefStatement
   } = body;

   if (!reviewerId || !professionalCompetence || !reliability || !interpersonalSkills || !trustworthiness || !overallImage) {
    return NextResponse.error();
  }

  const listingAndReservation = await prisma.user.update({
    where: {
      id: userId
    },
    data: {
      reviews: {
        create: {
          reviewerId: currentUser.id,
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

  return NextResponse.json(listingAndReservation);
}
