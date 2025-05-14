import axios from "../services/api.js";

export const fetchUsers = async () => {
  const response = await axios.get("/users");
  return response.data;
}

export const fetchGuardians = async () => {
  const response = await axios.get("/guardians");
  return response.data;
}
