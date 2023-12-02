import React, { useState, useContext } from "react";
import Image from "next/image";
import { motion, useDragControls, useAnimate } from "framer-motion";

import IconButton from "../ui/icon-button";
import { AuthContext } from "@/contexts/AuthContext";

const Card = ({ category, data, idx, children }) => {
  const [leaveX, setLeaveX] = useState(0);
  const [scope, animate] = useAnimate();
  const { like, dislike } = useContext(AuthContext);
  const controls = useDragControls();
  const likeIconData = {
    src: "/heart.svg",
    alt: "Like button",
    size: 24,
  };
  const dislikeIconData = {
    src: "/x.svg",
    alt: "Dislike button",
    size: 24,
  };

  const handleLike = (e) => {
    e.preventDefault();

    animate(scope.current, { x: 1000, transition: { duration: 0.4 } });
    setLeaveX(1000);
    return like(category, data.title);
  };

  const handleDislike = (e) => {
    e.preventDefault();

    animate(scope.current, { x: -1000, transition: { duration: 0.4 } });
    setLeaveX(-1000);
    return dislike(category, data.title);
  };

  const onDragEnd = (e, info) => {
    if (info.offset.x > 100) {
      setLeaveX(1000);
      handleLike(e);
    }
    if (info.offset.x < -100) {
      setLeaveX(-1000);
      handleDislike(e);
    }
  };

  if (!data) return null;
  return (
    <motion.div
      drag='x'
      dragControls={controls}
      onDragEnd={onDragEnd}
      exit={{
        x: leaveX,
        transition: { duration: 0.4 },
      }}
      animate={{
        rotate: `${idx % 2 === 0 ? 0.5 : -0.5}deg`,
      }}
      ref={scope}
      // className='w-4/5 h-1/2 min-h-fit bg-nearBlack dark:bg-ghostW rounded-lg flex flex-col content-center justify-evenly text-ghostW dark:text-nearBlack text-2xl items-center justify-items-center absolute'
      className='w-4/5 h-1/2 min-h-fit bg-transparent rounded-lg flex flex-col content-center justify-evenly text-nearBlack dark:text-ghostW text-2xl items-center justify-items-center absolute backdrop-blur-3xl backdrop-brightness-110 p-1 text-center'
    >
      <Image
        src={data.img}
        alt={`Image of ${data.title}`}
        height={500}
        width={500}
        className='w-full h-2/3 rounded-lg px-1'
      />
      <h1>{data.title}</h1>
      {children}
      <div className='w-full flex flex-row justify-between content-center items-center justify-items-center px-10'>
        <IconButton
          iconDataObject={dislikeIconData}
          styles='rounded-full bg-red-500 p-3'
          action={handleDislike}
        />
        <IconButton
          iconDataObject={likeIconData}
          styles='rounded-full bg-green-500 p-3'
          action={handleLike}
        />
      </div>
    </motion.div>
  );
};

export default Card;
