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

export async function getAdoptions() {
  try {
    const response = await axios.get(`/adoptions`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar adoções:", error);
    throw error;
  }
}

export async function getAdoptionsByPetId(petId) {
  try {
    const response = await axios.get(`/adoptions?petId=${petId}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar adoções por pet:", error);
    throw error;
  }
}
