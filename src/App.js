import logo from "./logo.svg";
import "./App.css";
import SmallHeader from "./Components/Header1/SmallHeader";
import Header2 from "./Components/Header2/Header2";
import Header3 from "./Components/Header3/Header3";

function App() {
  return (
    <div className="App">
      <SmallHeader></SmallHeader>
      <Header2></Header2>
      <Header3></Header3>
    </div>
  );
}

export default App;
