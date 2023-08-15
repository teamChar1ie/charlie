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
    phone,
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
    html: `<h3>Name: ${currentUser.name}</h3>
    <b>Email:</b> ${currentUser.email}
    <br />
    <b>Case Type:</b> ${casetype.value}
    <br />
    <b>Law Firm:</b> ${lawfirm}
    <br />
    <b>Speciality:</b> ${category.value}
    <br />
    <b>Phone Number:</b> ${phone}
    <br />
    <b>More Info:</b> ${moreinfo}`,
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
      phoneNumber: parseInt(phone, 10),
      userId: currentUser.id
    }
  });

  return NextResponse.json(expertRequest);
}