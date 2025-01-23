import {HashRouter as Router,Routes,Route} from "react-router-dom";
import './App.css';

import Header from  "./components/Header";
import SectionPage from "./Pages/SectionPages";
import Achievements from "./Pages/Achievements";
import Footer from "./components/Footer";

function App() {
  return (
    <> 
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<SectionPage/>}/>
          <Route path="/certificates" element={<Achievements/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App;
