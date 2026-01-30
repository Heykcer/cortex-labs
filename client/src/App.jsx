import "./App.css";
import Navbar from "./Dashboard/Navbar";
import ParticleContainer from "./ParticleContainer";
function App() {
  return (
    <>
      {/* Galaxy particles */}
      <ParticleContainer />

      <header className="header">
        <Navbar />
      </header>

      <main>

      </main>
    </>
  );
}

export default App;
