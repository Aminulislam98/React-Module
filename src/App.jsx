import "./App.css";
import Navbar from "./Navbar/Navbar";
// import Hero from "./Hero-section/Hero";
import Footer from "./Footer-section/Footer";
import ModulePractice from "./Hero-section/Module-31";

function App() {
  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      <ModulePractice name="I Phone 12 Pro Max" brand="Apple" price="$1200" />
      <ModulePractice name="Samsung s25 Ultra" brand="Samsung" price="$1300" />

      <Footer />
    </>
  );
}

export default App;
