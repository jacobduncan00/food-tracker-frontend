import React from "react";
import FullDataCard from "./FullDataCard";

type props = {
  content: Array<string>;
};

const Data = ({ content }: props) => {
  // TODO Need to figure out how to type this
  return content.map((value: any) => {
    if (value.headache === true) {
      return (
        <FullDataCard
          date={value.date}
          breakfast={value.breakfast}
          lunch={value.lunch}
          dinner={value.dinner}
          snacks={value.snacks}
          drinks={value.drinks}
          headache="Yes"
        />
      );
    } else if (value.headache === false) {
      return (
        <FullDataCard
          date={value.date}
          breakfast={value.breakfast}
          lunch={value.lunch}
          dinner={value.dinner}
          snacks={value.snacks}
          drinks={value.drinks}
          headache="No"
        />
      );
    } else {
      return (
        <FullDataCard
          date={value.date}
          breakfast={value.breakfast}
          lunch={value.lunch}
          dinner={value.dinner}
          snacks={value.snacks}
          drinks={value.drinks}
          headache={value.headache}
        />
      );
    }
  });
};

export default Data;
