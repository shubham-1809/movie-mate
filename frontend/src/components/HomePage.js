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
