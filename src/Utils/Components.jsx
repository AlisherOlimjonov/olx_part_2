import React, { useState, useEffect } from "react";

const Button = ({ type, text }) => {
  return (
    <button className={type == "light" ? "btn--light" : "btn--dark"}>
      {text}
    </button>
  );
};

const Link = () => {
  return <div></div>;
};

export { Button, Link };
