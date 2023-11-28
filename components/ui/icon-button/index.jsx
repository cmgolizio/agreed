import React from "react";
import Image from "next/image";

const IconButton = ({ iconDataObject, styles, action }) => {
  const { src, alt, size } = iconDataObject;
  return (
    <button className={styles} onClick={(e) => action(e)}>
      <Image src={src} alt={alt} height={size} width={size} />
    </button>
  );
};

export default IconButton;
