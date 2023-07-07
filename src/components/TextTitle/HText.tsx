import React from "react";

interface Text{
    text: string
    className: string
}

const HText = ({text, className}:Text) => {
  return <div className={className}>{text}</div>;
};

export default HText;
