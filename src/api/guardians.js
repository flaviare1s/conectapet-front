import axios from "../services/api.js";

export const createGuardian = async (guardianData) => {
  const response = await axios.post("/guardians", {
    ...guardianData,
    id: crypto.randomUUID(),
  });
  return response.data;
};
