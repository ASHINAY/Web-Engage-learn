import React from "react";

const index = () => {
  const handleButton = () => {
    console.log("button Clicked");
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ fontSize: "18px", fontWeight: "bold" }}>Home</div>
      <button
        style={{ width: "200px", height: "30px", backgroundColor: "red" }}
        onClick={handleButton}
      >
        Click Me and See in Console
      </button>
    </div>
  );
};

export default index;
