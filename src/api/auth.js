import axios from "../services/api.js";

export async function loginUser(data) {
  try {
    const response = await axios.post("/login", data);
    return response.data;
  } catch (error) {
    const customError = new Error("Falha no login");
    customError.original = error;
    throw customError;
  }
}
