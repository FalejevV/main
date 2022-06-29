import { Style } from "./Components/GlobalStyle.styled";
import PreviewCard from "./Components/PreviewCard/PreviewCard";
import cardImage from "./Components/PreviewCard/img/imageD.jpg"

function App() {
  return (
    <>
      <Style/>
      <PreviewCard image={cardImage} maxWidth="600px" />
    </>
    
  );
}

export default App;
