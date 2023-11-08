import axios from "axios";

const baseURL = "https://api.themoviedb.org/3";
const token = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};

export const fetchData = async (url, params) => {
  try {
    const { data } = await axios.get(baseURL + url, {
      headers,
      params,
    });
    return data;
  } catch (error) {
    return error;
  }
};
