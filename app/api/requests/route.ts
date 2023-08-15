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

  const expertRequest = await prisma.expertRequest.create({
    data: {
      casetype: category.value,
      lawfirm,
      category: category.value,
      moreinfo,
      userId: currentUser.id
    }
  });

  return NextResponse.json(expertRequest);
}