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
    casetype,
    lawfirm,
    category,
    moreinfo
   } = body;

  Object.keys(body).forEach((value: any) => {
    if (!body[value]) {
      NextResponse.error();
    }
  });

  const expertrequest = await prisma.expertrequest.create({
    data: {
      casetype,
      lawfirm,
      category,
      moreinfo,
      userId: currentUser.id
    }
  });

  return NextResponse.json(expertrequest);
}