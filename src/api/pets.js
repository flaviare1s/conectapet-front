import axios from "../services/api.js"

export const getPets = async () => {
  const { data } = await axios.get("/pets")
  return data
}

export const getPet = async (id) => {
  const { data } = await axios.get(`/pets/${id}`)
  return data
}

export const getPetsByGuardianId = async (guardianId) => {
  const response = await axios.get(`/pets?guardianId=${guardianId}`);
  if (!Array.isArray(response.data)) {
    console.error("Resposta inesperada da API:", response.data);
    return [];
  }
  return response.data.filter((pet) => pet.guardianId === guardianId);
};

export const addPet = async (pet) => {
  await axios.post("/pets", pet);
}

export const updatePet = async (id, pet) => {
  await axios.put(`/pets/${id}`, pet);
}

export const deletePet = async (id) => {
  await axios.delete(`/pets/${id}`);
}

export async function updatePetStatus(petId, newStatus) {
  try {
    const response = await axios.patch(`/pets/${petId}`, {
      status: newStatus,
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar status do pet:", error);
    throw error;
  }
}
