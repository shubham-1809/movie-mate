import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllMovies } from "../api-helpers/api-helpers";
import MovieItem from "./Movies/MovieItem";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getAllMovies()
      .then((data) => setMovies(data.movies))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Box width={"100%"} height="100%" margin="auto" marginTop={2}>
      <Box margin={"auto"} width="80%" height={"40vh"} padding={2}>
        <img
          //src="https://i.ytimg.com/vi/bweRG6WueuM/maxresdefault.jpg"
          src="data:image/jpeg;base64,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"
          alt="Dunki"
          width={"100%"}
          height={"100%"}
        />
      </Box>
      <Box padding={5} margin="auto">
        <Typography variant="h4" textAlign={"center"}>
          Latest Releases
        </Typography>
      </Box>
      <Box
        margin={"auto"}
        display="flex"
        width="80%"
        justifyContent={"center"}
        alignItems="center"
        flexWrap="wrap"
      >
        {movies &&
          movies
            .slice(0, 6)
            .map((movie, index) => (
              <MovieItem
                id={movie.id}
                title={movie.title}
                posterUrl={movie.posterUrl}
                releaseDate={movie.releaseDate}
                key={index}
              />
            ))}
      </Box>
      <Box display="flex" padding={5} margin="auto">
        <Button
          LinkComponent={Link}
          to="/movies"
          variant="outlined"
          sx={{ margin: "auto", color: "#2b2d42" }}
        >
          View All Movies
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
