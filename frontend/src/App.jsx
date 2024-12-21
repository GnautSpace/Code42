import {HashRouter as Router,Routes,Route} from "react-router-dom";
import './App.css';

import Header from  "./components/Header.jsx";
import SectionPage from "./Pages/SectionPages.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <> 
      <Router>
        <Header/>
        <Routes>
          <Route path="/" exact element={<SectionPage/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App;
