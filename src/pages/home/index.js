import React from "react";

const index = () => {
  const handleButton = () => {
    window?.webengage?.track(`web-${Button}`, ButtonData);
    console.log(window.webengage);
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
        style={{ width: "200px", height: "30px", backgroundColor: "cyan" }}
        onClick={handleButton}
      >
        Click Me and See in Console
      </button>
    </div>
  );
};

export default index;
