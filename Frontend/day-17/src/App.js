import Card from './Component/Card';
import "./style.css";

function App(props) {
    return(
        <>
        <div className="mainheading">Calorie Read Only</div>
    <div className="app">
       <Card food="PIZZA" cal="56"></Card>
       <Card food="BURGER" cal="69"></Card>
       <Card food="COKE" cal="500"></Card>
       <Card food="FRIED RICE" cal="90"></Card>
       <Card food="LASSANIA" cal="200"></Card>
       <Card food="PANI PURI" cal="10"></Card>
    </div> 
    </>
    );
}
export default App;