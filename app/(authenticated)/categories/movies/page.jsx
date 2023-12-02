"use client";
import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";

import Card from "@/components/card";
import { AuthContext } from "@/contexts/AuthContext";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [currentUrl, setCurrentUrl] = useState("");
  const { currentUser } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!currentUrl) return;
    fetchMovies(currentUrl);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUrl]);

  const formattedReleaseDate = (date) => {
    const dateArr = date.split("-");
    const newDate = `Released: ${dateArr[1]}-${dateArr[2]}-${dateArr[0]}`;
    return newDate;
  };

  const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=1`;
  const inTheatersUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=1`;

  const fetchMovies = async (url) => {
    const data = await fetch(url);
    const movies = await data.json();
    const moviesArray = movies.results;
    const moviesMap = moviesArray.map((movieObj) => {
      return {
        title: movieObj.title,
        id: movieObj.id,
        img: "https://image.tmdb.org/t/p/w500" + movieObj.backdrop_path,
        released: formattedReleaseDate(movieObj.release_date),
      };
    });
    console.log(moviesMap);
    setMovies(moviesMap);
  };

  const handleUrl = (e, url) => {
    e.preventDefault();

    setCurrentUrl(url);
  };

  if (!currentUser) return router.push("/login");
  return (
    // <div className='min-h-full h-full min-w-full w-full flex flex-col items-center justify-start mt-48 p-3'>
    <>
      {!currentUrl ? (
        <>
          <button
            className='text-sm absolute top-32'
            onClick={() => router.back()}
          >
            {"< Back"}
          </button>
          <h1 className='text-3xl mb-6'>MOVIES</h1>
          <button
            className='text-2xl text-[#7171ff] dark:text-[#6666D9] bg-transparent mb-5'
            onClick={(e) => handleUrl(e, popularUrl)}
          >
            Popular
          </button>
          <button
            className='text-2xl text-[#7171ff] dark:text-[#6666D9] bg-transparent mb-5'
            onClick={(e) => handleUrl(e, inTheatersUrl)}
          >
            In Theaters
          </button>
        </>
      ) : movies.length ? (
        movies.map((movieObj, index) => {
          return (
            <>
              <button
                className='text-sm absolute top-32'
                onClick={() => router.back()}
              >
                {"< Back"}
              </button>
              <Card
                category='movies'
                data={movieObj}
                key={movieObj.id}
                idx={index}
              >
                <h2 className='text-sm'>{movieObj.released}</h2>
              </Card>
            </>
          );
        })
      ) : (
        <h1 className='text-2xl'>Loading...</h1>
      )}
    </>
  );
};

export default Movies;
