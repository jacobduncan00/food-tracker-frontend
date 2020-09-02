import React from "react";
import DataCard from "./DataCard";

type props = {
  date: string;
  breakfast: string;
  lunch: string;
  dinner: string;
  snacks: string;
  drinks: string;
  headache: string;
};

const FullDataCard = ({
  date,
  breakfast,
  lunch,
  dinner,
  snacks,
  drinks,
  headache,
}: props) => {
  return (
    <div className="text-center max-w-sm rounded overflow-hidden shadow-lg bg-white inline-block m-12">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{date}</div>
        <DataCard title="Breakfast " content={breakfast} />
        <DataCard title="Lunch " content={lunch} />
        <DataCard title="Dinner " content={dinner} />
        <DataCard title="Snacks " content={snacks} />
        <DataCard title="Drinks " content={drinks} />
        <DataCard title="Headache " content={headache} />
      </div>
    </div>
  );
};

export default FullDataCard;
