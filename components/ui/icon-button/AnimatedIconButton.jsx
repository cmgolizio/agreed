import React from "react";
import Image from "next/image";
import { motion, useAnimate } from "framer-motion";

const AnimatedIconButton = ({ iconDataObject, styles, action, animation }) => {
  const [scope, animate] = useAnimate();
  const { src, alt, size } = iconDataObject;

  const handleClick = (e) => {
    animate([[".icon", { y: -32 }, { duration: 0.2 }]]);

    action(e);
  };
  return (
    <div ref={scope}>
      <button onClick={(e) => handleClick(e)} className={styles}>
        <span>
          <Image
            src={src}
            alt={alt}
            height={size}
            width={size}
            className='icon'
          />
        </span>
      </button>
    </div>
  );
};

export default AnimatedIconButton;
