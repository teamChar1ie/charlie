import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport')

const transporter = nodemailer.createTransport(sendgridTransport({
  auth: {
    api_key: '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'
  }
}));

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

  transporter.sendMail({
    'to': "nmalik2@tepper.cmu.edu",
    'from': "teamcharlie61@gmail.com",
    'subject': `${currentUser.name} Requesting Expert`,
    'html': `<h1>Name: ${currentUser.name}</h1>
    Email: ${currentUser.email}
    Case Type: ${casetype}
    Law Firm: ${lawfirm}
    Speciality: ${category}
    More Info: ${moreinfo}`
  });

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