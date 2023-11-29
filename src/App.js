import "./App.css";
import Announcement from "./components/Announcement";
import HandPicked from "./components/HandPicked";
import Hero from "./components/Hero";
import LatestOfferings from "./components/LatestOfferings";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Navbar/>
      <Announcement/>
      <Hero />
      <HandPicked/>
      <LatestOfferings/>
      <Menu/>
      <Footer/>
    </div>
  );
}

export default App;
