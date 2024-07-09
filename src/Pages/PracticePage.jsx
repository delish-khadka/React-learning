import React, { useState, useEffect } from "react";
import { getMovies } from "../api/api";
import { useParams } from "react-router-dom";

const PracticePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //const [indiData, setIndiData] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getMovies();
        setMovies(data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    // const fetchMoviesById = async (id) => {
    //   const data = await getMoviesById(id);
    //   console.log(data);
    //   setIndiData(data);
    // };

    fetchMovies();
    //fetchMoviesById();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading movies data: {error.message}</p>;

  return (
    <div>
      <h2>Anime Movies</h2>
      <div style={movieGridStyle}>
        {movies.map((movie) => (
          <div key={movie.mal_id} style={movieCardStyle}>
            <h3>{movie.title}</h3>
            <img src={movie.images.jpg.image_url} alt={movie.title} style={movieImageStyle} />
            <p>{movie.synopsis}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const movieGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
  gap: "20px",
  padding: "20px",
};

const movieCardStyle = {
  border: "1px solid #ccc",
  borderRadius: "8px",
  padding: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const movieImageStyle = {
  width: "100%",
  height: "auto",
  borderRadius: "4px",
};

export default PracticePage;
