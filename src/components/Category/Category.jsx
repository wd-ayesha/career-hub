import React from "react";
import "./Category.css";

const Category = ({ category }) => {
  const { id, name, available_jobs, logo } = category;
  return (
    <div className="border rounded p-5 bg-purple-100 text-left">
      <img className="bg-purple-200 p-2" src={logo} alt="" />
      <p className="text-xl font-bold py-1">{name}</p>
      <p>{available_jobs}</p>
    </div>
  );
};

export default Category;
