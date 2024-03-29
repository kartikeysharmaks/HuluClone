import React from "react";
import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

function Results({ results }) {
  console.log(results);
  return (
    <FlipMove className="px-10 my-10 sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {results?.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </FlipMove>
  );
};

export default Results;
