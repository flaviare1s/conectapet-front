import axios from "../services/api";

export const verifyEmail = async ({ email, codigo }) => {
  const response = await axios.post("/users/verify-email", {
    email,
    verificationCode: codigo,
  });
  return response.data;
};
