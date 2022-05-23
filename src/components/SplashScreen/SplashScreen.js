import React from "react";
import "./SplashScreen.css";

function SplashScreen() {
  return (
    <div className="gif">
      <img className="loader-img" src={require("./6oa.gif")} />
    </div>
  );
}

export default SplashScreen;
