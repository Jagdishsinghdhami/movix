import axios from "axios";
// https://api.themoviedb.org/3/movie/550?api_key=6de7984a1109e7026269ba4a11e18aec

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromAPi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (error) {
    console.log("api.js error ", error);
    return error;
  }
};
