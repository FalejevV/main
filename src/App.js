import PreviewCard from "./Components/PreviewCard/PreviewCard";
import cardImage from "./Components/PreviewCard/img/imageD.jpg"
import { Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Rating from "./Components/Rating/Rating";
import Expenses from "./Components/Expenses/Expenses";
import Snap from "./Components/Snap/Snap";
import Advice from "./Components/Advices/Advice";
import Calculator from "./Components/Calculator/Calculator";
import IPTRacker from "./Components/IPTracker/IPTracker";
import Columns from "./Components/3Columns/Columns";
import Tips from "./Components/Tips/Tips";
import TimeDashboard from "./Components/TimeDashboard/TimeDashboard";
import TodoList from "./Components/TodoList/TodoList";
import CountdownTimer from "./Components/CountdownTimer/CountdownTimer";
import JobListings from "./Components/JobListings/JobListings";
import NavbarNew from "./Components/NavbarNew/NavbarNew";

function App() {
  return (
      <>
        <NavbarNew />
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
          <Route path ="/main/rating" element={
              <Rating />
            }/>
          <Route path ="/main/expenses" element={
            <Expenses />
          }/>
          <Route path ="/main/snap" element={
              <Snap />
            }/>
          <Route path ="/main/advice" element={
              <Advice />
            }/>
          <Route path ="/main/calculator" element={
            <Calculator />
          }/>
          <Route path ="/main/tracker" element={
            <IPTRacker />
          }/>
          <Route path ="/main/3columns" element={
            <Columns />
          }/>

          <Route path ="/main/tips" element={
            <Tips />
          }/>

           <Route path ="/main/tdashboard" element={
            <TimeDashboard />
          }/>

          <Route path ="/main/todo" element={
            <TodoList />
          }/>

          <Route path ="/main/timer" element={
            <CountdownTimer />
          }/>

          
          <Route path ="/main/joblist" element={
            <JobListings />
          }/>

        </Routes>
      </>
  );
}

export default App;
