import React from "react";

export default (footer) => {
  let footerStyle = {
    position: "realtive",
    top: "100vh",
    width: "100%",
  };
  return (
    <footer className="bg-dark text-light mt-2" style={footerStyle}>
      <p className="text-center p-4 mt-5"> Copyright &copy; my TODO LIST</p>
    </footer>
  );
};
