import React from "react";
import { FooterData } from "../data/data";
const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="upperFooterContainer">
        <div className="footerColumns">
          {Object.entries(FooterData).map(([key, array]) => (
            <div className="footerColumn">
              <a key={key} href="/.">
                {key}
              </a>
              <div className="footerColumnSubContainer">
                {array.map((value) => (
                  <a key={value} href="/.">
                    {value}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="socialsContainer">
          <img
            src="iconFacebook.svg"
            width="50px"
            height="50px"
            alt="iconFacebook"
          ></img>
          <img
            src="iconTwitter.svg"
            width="50px"
            height="50px"
            alt="iconTwitter"
          ></img>
          <img
            src="iconInstagram.svg"
            width="50px"
            height="50px"
            alt="iconInstagram"
          ></img>
          <img
            src="iconYoutube.svg"
            width="50px"
            height="50px"
            alt="iconYoutube"
          ></img>
        </div>
      </div>
      <div className="middleFooterContainer">
        <div className="guideContainer">
          <a href="/.">Przewodniki</a>
          <a href="/.">Warunki korzystania</a>
          <a href="/.">Regulamin sprzedaży</a>
          <a href="/.">Dane firmy</a>
        </div>
      </div>
      <div className="bottomFooterContainer">
        <div className="cookieContainer">
          <a href="/.">Polityka prywatności i zasady dotyczące plików cookie</a>
          <a href="/.">Ustawienia dotyczące plików cookie</a>
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
