import React from "react";

const DiscoverMore = () => {
  return (
    <div className="DiscoverMoreContainer">
      <div className="DiscoverMoreItemContainer">
        <img className="DiscoverMoreImage" src="nikePhotoshoot8.jpg"></img>
        <div className="DiscoverMoreButtonContainer">
          <div className="DiscoverMoreGenderButtonContainer">
            <button className="button-18">Mężczyźni</button>
          </div>
          <div className="DiscoverMoreOtherButtonContainer">
            <button className="button-18">👀 Przegladaj stylizacje</button>
          </div>
        </div>
      </div>
      <div className="DiscoverMoreItemContainer">
        <img className="DiscoverMoreImage" src="nikePhotoshoot7.jpg"></img>
        <div className="DiscoverMoreButtonContainer">
          <div className="DiscoverMoreGenderButtonContainer">
            <button className="button-18">Kobiety</button>
          </div>
          <div className="DiscoverMoreOtherButtonContainer">
            <button className="button-18">👀 Przegladaj stylizacje</button>
          </div>
        </div>
      </div>
      <div className="DiscoverMoreItemContainer">
        <img className="DiscoverMoreImage" src="NikePhotoshoot5.jpg"></img>
        <div className="DiscoverMoreButtonContainer">
          <div className="DiscoverMoreGenderButtonContainer">
            <button className="button-18">Dzieci</button>
            <button className="button-18">Nastolatki</button>
          </div>
          <div className="DiscoverMoreOtherButtonContainer">
            <button className="button-18">👀 Przegladaj stylizacje</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverMore;
