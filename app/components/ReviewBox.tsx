'use client';

import Container from "./Container";

interface ReviewBoxProps {
    professionalCompetence: number,
    reliability: number;
    interpersonalSkills: number;
    trustworthiness: number;
    overallImage: number; 
    briefStatement: string;
};

const ReviewBox: React.FC<ReviewBoxProps> = ({ 
    professionalCompetence,
    reliability,
    interpersonalSkills,
    trustworthiness,
    overallImage,
    briefStatement}) => {
  return ( 
    <div
      className="
        max-w-[2520px]
        mx-auto
        xl:px-20 
        md:px-10
        sm:px-2
        px-4
      "
    >
    <Container>
        Professional Competence: {professionalCompetence}/5
    </Container>

    <Container>
        Reliability:  {reliability}/5
    </Container>

    <Container>
    Interpersonal Skills:  {interpersonalSkills}/5
    </Container>

    <Container>
    Trustworthiness:  {trustworthiness}/5
    </Container>

    <Container>
    Overall Image:  {overallImage}/5
    </Container>

    <Container>
    Brief Statement:  {briefStatement}    
    </Container>
    </div>
   );
}
 
export default ReviewBox;