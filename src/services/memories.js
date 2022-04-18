import api from "./apiConfig";

export const getMemories = async () => {
  try {
    const response = await api.get("/memories");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getMemory = async (id) => {
  try {
    const response = await api.get(`/memories/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createMemory = async (memory) => {
  try {
    const response = await api.post("/memories", memory);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateMemory = async (id, memory) => {
  try {
    const response = await api.put(`/memories/${id}`, memory);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteMemory = async (id) => {
  try {
    const response = await api.delete(`/memories/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};