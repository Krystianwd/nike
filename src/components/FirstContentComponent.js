import React from "react";

const FirstContentComponent = () => {
  return (
    <div className="FirstContentComponent-Container">
      <div style={{ padding: "35px" }}>
        <p
          style={{
            fontFamily: "Copperplate",
            fontWeight: "bold",
            fontSize: "60px",
          }}
        >
          LATO PEŁNE BLASKU
        </p>
        <p
          style={{
            fontFamily: "Apple Chancery",
            //   fontWeight: "bold",
            fontSize: "30px",
          }}
        >
          Tego lata olśniewaj dzięki produktom stworzonym do aktywności.
        </p>
      </div>

      <div className="FirstContentComponent-ButtonContainer">
        <button className="button-18">Przegladaj</button>
        <button className="button-18">Dla dzieci</button>
      </div>
    </div>
  );
};

export default FirstContentComponent;
