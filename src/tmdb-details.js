import axios from "axios";
import { TMDB_BASE_URL } from "./config";
const TMDB_API_KEY= import.meta.env.VITE_TMDB_API_KEY;


export const fetchPopularMovies = async () => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/movie/popular`, {
      params: { api_key: TMDB_API_KEY, language: "en-US" },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    return [];
  }
};

export const fetchFullMovieDetails = async (movieId) => {
  try {
    const movieResponse = await axios.get(`${TMDB_BASE_URL}/movie/${movieId}`, {
      params: { api_key: TMDB_API_KEY, language: "en-US" },
    });

    const creditsResponse = await axios.get(
      `${TMDB_BASE_URL}/movie/${movieId}/credits`,
      {
        params: { api_key: TMDB_API_KEY, language: "en-US" },
      }
    );

    return {
      ...movieResponse.data,
      cast: creditsResponse.data.cast,
      crew: creditsResponse.data.crew,
    };
  } catch (error) {
    console.error("Error fetching full movie details:", error);
    return null;
  }
};

