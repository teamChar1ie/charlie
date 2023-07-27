import cities from "cities.json"

const formattedCountries = cities.map((city : {
                                                name: string;
                                                lat: string;
                                                lng: string;
                                                state: string;
                                              }
  ) => ({
    value: city.name,
    label: city.state,
    latlng: [city.lat, city.lng]
  }));

const useCountries = () => {
  const getAll = () => formattedCountries;

  const getByValue = (value: string) => {
    return formattedCountries.find((item) => item.value === value);
  }

  return {
    getAll,
    getByValue
  }
};

export default useCountries;