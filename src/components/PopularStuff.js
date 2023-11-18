import React from "react";
import PopularStuffSwiper from "./PopularStuffSwiper";
const PopularStuff = () => {
  return (
    <div className="popularStuff">
      <div className="popularStuffUpperContainer">
        <p>Popularne w tym tygodniu</p>
        <div className="arrowsDiv">
          <img
            className="arrows"
            id="prev"
            src="leftArrow.svg"
            width="60px"
            height="60px"
            alt="leftArrow"
          ></img>
          <img
            alt="rightArrow"
            className="arrows"
            id="next"
            src="rightArrow.svg"
            width="60px"
            height="60px"
          ></img>
        </div>
      </div>

      <PopularStuffSwiper></PopularStuffSwiper>
    </div>
  );
};

export default PopularStuff;
