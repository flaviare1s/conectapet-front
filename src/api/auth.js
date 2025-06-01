import axios from "../services/api.js";

export async function loginUser(data) {
  try {
    const response = await axios.post("/login", data);
    return response.data;
  } catch (error) {
    throw new Error("Falha no login", error);
  }
}
