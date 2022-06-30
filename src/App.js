import PreviewCard from "./Components/PreviewCard/PreviewCard";
import cardImage from "./Components/PreviewCard/img/imageD.jpg"
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Components/Homepage/Homepage";

function App() {
  return (
      <>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage/>} />
          <Route path="/main/card" element={
              <PreviewCard image={cardImage} maxWidth="600px"
                category="PERFUME"
                title="Gabrielle Essence Eau De Parfum"
                about="A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL."
                currentPrice="$149.99"
                oldPrice="$169.99"
            />
          }/>
        </Routes>
      </>
  );
}

export default App;
