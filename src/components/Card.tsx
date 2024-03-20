import * as React from "react";

interface ICardProps {
  gambar: string;
  untung: string;
}

const Card: React.FunctionComponent<ICardProps> = (props) => {
  return (
    <div className=" w-[250px] aspect-square  text-center">
      <span className="text-center flex m-auto">{props.gambar}</span>
      <h2 className=" text-xl font-semibold text-center">{props.untung}</h2>
    </div>
  );
};

export default Card;