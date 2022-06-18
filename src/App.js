import Findfood from "./Findfood";
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
     <Footer />
    </div>
  );
}

export default App;
