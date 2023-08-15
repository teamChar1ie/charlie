var specialities = [
    {
        name: "Civil Procedure"
    },
    {
        name: "Arbitration"
    },
    {
        name: "Business"
    },
    {
        name: "Intellectual Property"
    },
    {
        name: "Contract"
    },
    {
        name: "Real Estate"
    },
    {
        name: "Breach of Contract"
    },
    {
        name: "Construction"
    },
    {
        name: "Family Law"
    },
    {
        name: "Personal Injury"
    },
    {
        name: "Product Liability"
    },
    {
        name: "Security"
    },
    {
        name: "Class Action"
    },
    {
        name: "Competition Law"
    },
    {
        name: "Landlord-tenant Law"
    },
    {
        name: "Medical Malpractice"
    },
    {
        name: "Tort"
    },
    {
        name: "Civil Law"
    },
    {
        name: "Civil and Political Rights"
    },
    {
        name: "Employment Litigation"
    },
    {
        name: "Patent Infringement"
    },
    {
        name: "Public Interest"
    },
    {
        name: "Mass Tort"
    },
    {
        name: "Criminal Defense"
    },
  ]
  
  const formattedSpecialities = specialities.map((speciality
    ) => ({
      value: speciality.name,
    }));
  
  const useSpecialities = () => {
    const getAll = () => formattedSpecialities;
  
    const getByValue = (value: string) => {
      return formattedSpecialities.find((item) => item.value === value);
    }
  
    return {
      getAll,
      getByValue
    }
  };
  
  export default useSpecialities;