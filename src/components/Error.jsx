import React from "react";

export const Error = ({ mensaje }) => {
  return (
    <div className="bg-red-600 text-white text-center font-bold py-3">
      <p>{mensaje}</p>
    </div>
  );
};
