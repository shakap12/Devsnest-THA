import Card from "./Components/Card.js";
import "./App.css";



function App() {
  return (
    <>
    <p className="heading">There are 4 counter component instances that each manage their own state.</p>
    <div className="container">
      <div className="content">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      </div>
    </>
  );
}

export default App;