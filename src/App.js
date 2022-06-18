import Findfood from "./Findfood";
import DonationSection from "./DonationSection";
import Footer from "./Footer";
import Introduction from "./Introduction";
import Navbar from "./Navbar";
import Foodlocation from "./Foodlocation";
import Aboutus from "./aboutus";
import Help from "./Help";
import About from "./about";

function App() {
  return (
    <div className="App">
     <Navbar />
     <Aboutus />
     <Introduction />
     <About />
     <Findfood />
     <Foodlocation />
     <Foodlocation />
     <Foodlocation />
     <div className="footer1" id="foot1"><DonationSection />
     <Help/>
     </div>
     
     <Footer />
    </div>
  );
}

export default App;
