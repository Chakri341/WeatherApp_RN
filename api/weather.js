import { apiKey } from "../constants/index.js";

const forecastEndpoint = (params) => `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${params.cityName}&days=${params.days}&aqi=no&alerts=no`;
const locationEndpoint = (params) => `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${params.cityName}`;

const apiCall = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }

    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error; 
  }
};

export const fetchForecast = async (params) => {
  const url = forecastEndpoint(params);
  return apiCall(url);
};

export const fetchLocation = async (params) => {
  const url = locationEndpoint(params);
  return apiCall(url);
};
