import axios from "axios";
import { TMDB_BASE_URL } from "./config";
const TMDB_API_KEY= import.meta.env.VITE_TMDB_API_KEY;

export const fetchPopularTVShows = async () => {
    try {
    const response = await axios.get(`${TMDB_BASE_URL}/tv/popular`, {
      params: { api_key: TMDB_API_KEY, language: "en-US", page: 1},
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    return [];
  }
}

export const fetchFullTVShowDetails = async (showId) => {
  try {
    const movieResponse = await axios.get(`${TMDB_BASE_URL}/tv/${showId}`, {
      params: { api_key: TMDB_API_KEY, language: "en-US" },
    });

    const creditsResponse = await axios.get(
      `${TMDB_BASE_URL}/tv/${showId}/credits`,
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

export const fetchTrendingTVShows = async () => {
    try {
    const response = await axios.get(`${TMDB_BASE_URL}/trending/tv/week`, {
      params: { api_key: TMDB_API_KEY, language: "en-US", page: 1},
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    return [];
  }
}

export const fetchTopRatedTVShows = async () => {
    try {
    const response = await axios.get(`${TMDB_BASE_URL}/tv/top_rated`, {
      params: { api_key: TMDB_API_KEY, language: "en-US", page: 1},
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    return [];
  }
}