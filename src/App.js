import PhotoSwiper from "./components/PhotoSwiper";
import "./App.css";
import DeliveryMonit from "./components/DeliveryMonit";
import FirstContentComponent from "./components/FirstContentComponent";
import Lead from "./components/Lead";
import Navbar from "./components/Navbar";
import PopularStuff from "./components/PopularStuff";
import DiscoverMore from "./components/DiscoverMore";
import Footer from "./components/Footer";

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
        <PhotoSwiper></PhotoSwiper>
        <PopularStuff></PopularStuff>
        <DiscoverMore></DiscoverMore>
        <Footer></Footer>
      </main>
    </>
  );
}

export default App;
