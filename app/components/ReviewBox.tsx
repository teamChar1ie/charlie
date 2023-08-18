'use client';

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
    Professional Competence: {professionalCompetence}

    Reliability:  {reliability}

    Interpersonal Skills:  {interpersonalSkills}

    Trustworthiness:  {trustworthiness}

    Overall Image:  {overallImage}

    Brief Statement:  {briefStatement}

    </div>
   );
}
 
export default ReviewBox;