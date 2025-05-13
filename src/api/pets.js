import axios from "../services/api.js"

export const getPets = async () => {
  const { data } = await axios.get("/pets")
  return data
}
