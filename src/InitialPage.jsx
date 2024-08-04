import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/InitialPage.css";

const InitialPage = () => {
  const navigate = useNavigate();

  const handleExercise1 = () => {
    navigate("/exercise1");
  };

  const handleExercise2 = () => {
    navigate("/exercise2");
  };

  return (
    <div className="container">
      <h1>Initial Page</h1>
      <button className="initialButton" onClick={handleExercise1}>
        Go to Exercise 1
      </button>
      <button className="initialButton" onClick={handleExercise2}>
        Go to Exercise 2
      </button>
    </div>
  );
};

export default InitialPage;
