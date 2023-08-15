import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";
const sgMail = require('@sendgrid/mail')


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

  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to: "nmalik2@tepper.cmu.edu",
    from: "teamcharlie61@gmail.com",
    subject: `${currentUser.name} Requesting Expert`,
    html: `<h1>Name: ${currentUser.name}</h1>
    Email: ${currentUser.email}
    Case Type: ${casetype.value}
    Law Firm: ${lawfirm}
    Speciality: ${category.value}
    More Info: ${moreinfo}`,
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })

  const expertRequest = await prisma.expertRequest.create({
    data: {
      casetype: casetype.value,
      lawfirm,
      category: category.value,
      moreinfo,
      userId: currentUser.id
    }
  });

  return NextResponse.json(expertRequest);
}