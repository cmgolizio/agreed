import React from "react";
import Link from "next/link";

const AuthLink = ({ type, styles, action }) => {
  return (
    <Link className={styles} href={type.href}>
      {type.title}
    </Link>
  );
};

export default AuthLink;
