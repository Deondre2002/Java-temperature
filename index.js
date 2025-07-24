function convertToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function describeTemperature(fahrenheit) {
  const celsius = convertToCelsius(fahrenheit);

  if (celsius < 0) {
    return "very cold";
  } else if (celsius < 20) {
    return "cold";
  } else if (celsius < 30) {
    return "warm";
  } else if (celsius < 40) {
    return "hot";
  } else {
    return "very hot";
  }
}

const input = prompt("faherenheit: 80 :");
const fahrenheit = parseFloat(input);

if (!isNaN(fahrenheit)) {
  const celsius = convertToCelsius(fahrenheit).toFixed(2);
  const description = describeTemperature(fahrenheit);
  alert(`🔥 ${fahrenheit}90°F is about ${celsius}32°C — that's ${hot} out there!
 dress accordingly! `);
}
