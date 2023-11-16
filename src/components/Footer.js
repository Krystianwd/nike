import React from "react";
import { FooterData } from "../data/data";
const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="upperFooterContainer">
        <div className="footerColumns">
          {Object.entries(FooterData).map(([key, array]) => (
            <div className="footerColumn">
              <a key={key} href="">
                {key}
              </a>
              <div className="footerColumnSubContainer">
                {array.map((value) => (
                  <a key={value} href="">
                    {value}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="socialsContainer">
          <img src="iconFacebook.svg" width="50px" height="50px"></img>
          <img src="iconTwitter.svg" width="50px" height="50px"></img>
          <img src="iconInstagram.svg" width="50px" height="50px"></img>
          <img src="iconYoutube.svg" width="50px" height="50px"></img>
        </div>
      </div>
      <div className="middleFooterContainer">
        <div className="guideContainer">
          <a>Przewodniki</a>
          <a>Warunki korzystania</a>
          <a>Regulamin sprzedaży</a>
          <a>Dane firmy</a>
        </div>
      </div>
      <div className="bottomFooterContainer">
        <div className="cookieContainer">
          <a>Polityka prywatności i zasady dotyczące plików cookie</a>
          <a>Ustawienia dotyczące plików cookie</a>
        </div>
        <div className="locationContainer">
          <p className="location">📌 Polska</p>
          <p>© 2023 Dębiec Kąpany, Inc. Utworzone w celach pokazowych</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
