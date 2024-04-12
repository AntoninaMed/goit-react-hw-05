import axios from 'axios';

const accessToken =
 "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjFmMmUyZGY1MzNiYTZmNjllM2RjNDFhODQwMjRjMyIsInN1YiI6IjY2MTliOTk3OGMzMTU5MDE5M2MwZDA0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K7LWDMwsXwgPzrzfZ-sTpju-LtULnhM080LZYvFcH5s";
export const trendingMovies = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/trending/movie/day",
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const searchMovie = async (query) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${query}`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const getMovieDetails = async (movieId) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const getMovieCredits = async (movieId) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  export const getMovieReviews = async (movieId) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };