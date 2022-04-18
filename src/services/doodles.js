import api from "./apiConfig";

export const getDoodles = async () => {
  try {
    const response = await api.get("/doodles");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getDoodle = async (id) => {
  try {
    const response = await api.get(`/doodles/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createDoodle = async (doodle) => {
  try {
    const response = await api.post("/doodles", doodle);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateDoodle = async (id, doodle) => {
  try {
    const response = await api.put(`/doodles/${id}`, doodle);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteDoodle = async (id) => {
  try {
    const response = await api.delete(`/doodles/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};