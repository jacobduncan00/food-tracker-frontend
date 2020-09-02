import React from "react";

type props = {
  title: string;
  content: string;
};

const DataCard = ({ title, content }: props) => {
  return (
    <div>
      <p className="justify-left text-black font-bold text-base inline">
        {title}
      </p>
      <p className="flex justify-center text-gray-900 text-base">{content}</p>
    </div>
  );
};

export default DataCard;
