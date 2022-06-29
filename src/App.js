import PreviewCard from "./Components/PreviewCard/PreviewCard";
import cardImage from "./Components/PreviewCard/img/imageD.jpg"

function App() {
  return (
    <PreviewCard image={cardImage} maxWidth="600px"
      category="PERFUME"
      title="Gabrielle Essence Eau De Parfum"
      about="A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL."
      currentPrice="$149.99"
      oldPrice="$169.99"

      />
  );
}

export default App;
