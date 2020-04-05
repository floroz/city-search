import React from "react";

const Results = ({ cities }) => {
  if (!cities) {
    return null;
  }

  return cities.map(({ city, state }, index) => (
    <div key={index}>
      <span>{city}: </span>
      <span>{state}</span>
    </div>
  ));
};

export default Results;
