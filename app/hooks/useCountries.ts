import cities from "cities.json"

const formattedCountries = cities.map((city) => ({
  value: city.name,
  label: city.country,
  latlng: [parseFloat(city.lat), parseFloat(city.lng)]
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