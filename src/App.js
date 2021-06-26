import "./App.css";
import Header from "./Components/Header/Header";
import LearningCss from "./Components/LearningCss";
import SecondFile from "./Components/SecondFile";
import Thirdfile from "./Components/Thirdfile";
import Landing from "./Components/Landing/Landing";

function App() {
  return (
    <div className="App">
      <Landing/>
      <Header />
      <LearningCss />
      <SecondFile />
      <Thirdfile />
      <Landing/>
    </div>
  );
}

export default App;
