import api from "./apiConfig";

export const getWeathers = async () => {
  try {
    const response = await api.get("/weather");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getWeather = async (id) => {
  try {
    const response = await api.get(`/weather/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateWeather = async (id, weather) => {
  try {
    const response = await api.put(`/weather/${id}`, weather);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteWeather = async (id) => {
  try {
    const response = await api.delete(`/weather/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
