"use client";
import React from "react";

import Card from "@/components/card";

const fakeMovies = [
  {
    title: "Heart Movie",
    img: "/heart.svg",
  },
  {
    title: "Moon Movie",
    img: "/moon.svg",
  },
  {
    title: "X Movie",
    img: "/x.svg",
  },
  {
    title: "Sun Movie",
    img: "/sun.svg",
  },
  {
    title: "Heart Movie 2",
    img: "/heart.svg",
  },
  {
    title: "Moon Movie 2",
    img: "/moon.svg",
  },
  {
    title: "X Movie 2",
    img: "/x.svg",
  },
  {
    title: "Sun Movie 2",
    img: "/sun.svg",
  },
];

const Movies = () => {
  return (
    <div className='min-h-full h-full min-w-full w-full flex items-center justify-center p-3'>
      {fakeMovies.map((movieData, index) => {
        return (
          <Card
            category='movies'
            data={movieData}
            key={movieData.title}
            idx={index}
          />
        );
      })}
    </div>
  );
};

export default Movies;
