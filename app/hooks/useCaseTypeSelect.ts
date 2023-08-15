var casetypes = [
    {
        name: "Plaintiff"
    },
    {
        name: "Defense"
    },
  ]
  
  const formattedCasetypes = casetypes.map((casetype
    ) => ({
      value: casetype.name
    }));
  
  const useCasetypes = () => {
    const getAll = () => formattedCasetypes;
  
    const getByValue = (value: string) => {
      return formattedCasetypes.find((item) => item.value === value);
    }
  
    return {
      getAll,
      getByValue
    }
  };
  
  export default useCasetypes;