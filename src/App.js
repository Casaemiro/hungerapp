import Findfood from "./Findfood";
import DonationSection from "./DonationSection";
import Footer from "./Footer";
import Introduction from "./Introduction";
import Navbar from "./Navbar";
import Foodlocation from "./Foodlocation";

function App() {
  return (
    <div className="App">
     <Navbar />
     <Introduction />
     <Findfood />
     <Foodlocation />
     <Foodlocation />
     <Foodlocation />
     <div className="footer1" id="foot1"><DonationSection /></div>
     
     <Footer />
    </div>
  );
}

export default App;
