import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "d55e70abc3msh67a5ee8245853f0p1a2432jsn4af50cf67911",
    },
  });
  return data;
};
