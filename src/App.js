import "./App.css";
import DeliveryMonit from "./components/DeliveryMonit";
import FirstContentComponent from "./components/FirstContentComponent";
import Lead from "./components/Lead";
import Navbar from "./components/Navbar";
import { Player } from "video-react";

function App() {
  return (
    <>
      <main>
        <Lead />
        <Navbar />
        <DeliveryMonit />
        <FirstContentComponent />
        <video
          style={{ marginTop: "30px", height: "50%", width: "100%" }}
          autoPlay
          loop
          muted
        >
          <source src="nike_-_members_of_summer (720p).mp4" type="video/mp4" />
        </video>
        <div>Bam</div>
      </main>
    </>
  );
}

export default App;
