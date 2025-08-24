import axios from 'axios';
import { TMDB_BASE_URL } from './config.js';
const TMDB_API_KEY= import.meta.env.VITE_TMDB_API_KEY;

export const fetchPopularMovies = async (page = 1) => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/movie/popular`, {
      params: {
        api_key: TMDB_API_KEY,
        language: 'en-US',
        page,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    return [];
  }
};

export const fetchTopRatedMovies = async () => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/movie/top_rated`, {
      params: {
        api_key: TMDB_API_KEY,
        language: 'en-US',
        page: 1,
      },
    });
    return response.data.results.slice(0, 5);
  } catch (error) {
    console.error('Error fetching top rated movies:', error);
    return [];
  }
};

export const fetchTrendingToday = async () => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/trending/movie/day`, {
      params: {
        api_key: TMDB_API_KEY,
      },
    });
    return response.data.results.slice(0, 5);
  } catch (error) {
    console.error('Error fetching trending today:', error);
    return [];
  }
};

export const searchMovies = async (query, page = 1) => {
  if (!query) return [];
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/search/multi`, {
      params: {
        api_key: TMDB_API_KEY,
        language: 'en-US',
        query,
        page,
      },
    });
    return response.data.results; 
  } catch (error) {
    console.error('Error searching movies:', error);
    return [];
  }
};
