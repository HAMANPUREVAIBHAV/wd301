// import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <h1 className="text-4xl font-bold text-red-600 mb-4">404 - Page Not Found</h1>
      <button
        id="backToHomeButton"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800"
        onClick={() => navigate("/")}
      >
        Back to Home
      </button>
    </div>
  );
};

export default NotFound;