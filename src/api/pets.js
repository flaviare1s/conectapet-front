import axios from "../services/api.js";

export const getPets = async () => {
  const { data } = await axios.get("/pets");
  return data;
};

export const getPet = async (id) => {
  const { data } = await axios.get(`/pets/${id}`);
  return data;
};

export const getPetsByGuardianId = async (guardianId) => {
  const response = await axios.get(`/pets?guardianId=${guardianId}`);
  if (!Array.isArray(response.data)) {
    console.error("Resposta inesperada da API:", response.data);
    return [];
  }
  return response.data.filter((pet) => pet.guardianId === guardianId);
};

export const addPet = async (formData) => {
  const token = localStorage.getItem("token");
  const response = await axios.post("/pets", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const updatePet = async (id, pet) => {
  const token = localStorage.getItem("token");
  await axios.put(`/pets/${id}`, pet, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deletePet = async (id) => {
  const token = localStorage.getItem("token");
  await axios.delete(`/pets/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

};

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
