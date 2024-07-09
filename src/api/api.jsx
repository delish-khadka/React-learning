import axios from "axios";

const API_BASE_URL = "https://api.jikan.moe/v4";

export const getMovies = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/anime`, {
      params: { type: "movie" },
    });
    return response.data.data; // Adjusted to match Jikan API response structure
  } catch (error) {
    console.error("Error fetching movies data:", error);
    throw error;
  }
};

// export const getMoviesById = async (id) => {
//   try {
//     const response = await axios.get(`${API_BASE_URL}/anime/${id}`, {
//       //params: { type: "movie" },
//     });
//     return response.data.data; // Adjusted to match Jikan API response structure
//   } catch (error) {
//     console.error("Error fetching movies data:", error);
//     throw error;
//   }
// };
