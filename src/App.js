import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TabsSection from "./components/TabsSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <div className="loader" aria-hidden="true">
        <span>N</span>
      </div>
      <Navbar />
      <main>
        <HeroSection />
        <TabsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
