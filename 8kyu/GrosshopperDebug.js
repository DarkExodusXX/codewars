const weatherInfo = temp => {
  const celc = convertToCelsius(temp);
  return celc <= 0
    ? `${celc} is freezing temperature`
    : `${celc} is above freezing temperature`;
};

const convertToCelsius = temperature => (temperature - 32) * (5 / 9);