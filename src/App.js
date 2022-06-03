import "./App.css";
import MainFooter from "./Components/Footer/MainFooter";
import SmallHeader from "./Components/Header1/SmallHeader";
import Header2 from "./Components/Header2/Header2";
import Header3 from "./Components/Header3/Header3";
import MagnifierImg from "./Components/ProductDetail/MagnifierImg";

function App() {
  return (
    <div className="App">
      <SmallHeader></SmallHeader>
      <Header2></Header2>
      <Header3></Header3>
      <MagnifierImg></MagnifierImg>
      <MainFooter></MainFooter>
    </div>
  );
}

export default App;
