import PhotoSwiper from "./components/PhotoSwiper";
import "./App.css";
import DeliveryMonit from "./components/DeliveryMonit";
import FirstContentComponent from "./components/FirstContentComponent";
import Lead from "./components/Lead";
import Navbar from "./components/Navbar";
import PopularStuff from "./components/PopularStuff";
import DiscoverMore from "./components/DiscoverMore";
import Footer from "./components/Footer";
import FrontPageVideo from "./components/FrontPageVideo";

function App() {
  return (
    <>
      <main>
        <Lead />
        <Navbar />
        <DeliveryMonit />
        <FirstContentComponent />
        <FrontPageVideo></FrontPageVideo>
        <PhotoSwiper></PhotoSwiper>
        <PopularStuff></PopularStuff>
        <DiscoverMore></DiscoverMore>
        <Footer></Footer>
      </main>
    </>
  );
}

export default App;
