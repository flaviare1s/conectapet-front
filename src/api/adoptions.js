import axios from "../services/api.js";

export async function fetchPetById(petId) {
  try {
    const response = await axios.get(`/pets/${petId}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar pet:", error);
    throw error;
  }
}

export async function fetchGuardianById(guardianId) {
  try {
    const response = await axios.get(`/guardians/${guardianId}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar responsável:", error);
    throw error;
  }
}

export async function postAdoption(adoptionData) {
  try {
    const response = await axios.post(
      `/adoptions`,
      adoptionData
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao enviar adoção:", error);
    throw error;
  }
}
