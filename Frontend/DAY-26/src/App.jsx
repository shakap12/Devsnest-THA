import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { emailChange, nameChange } from './redux/action';
// import Hooks from './hooks';


function App() {
  const inputChange = useSelector(state=>state.inputChange)
  const dispatch = useDispatch()
  return (
    <div className="App">
        {/* <Hooks/> */}
        <form action="">
          Name <input type="text" 
    
          onChange={e=>dispatch(nameChange(e.target.value))} />
          <br />
          Email <input type="text"
          
          onChange ={e=>dispatch(emailChange(e.target.value))} />
        </form>
        <h1>Name is - {inputChange.username}</h1>
        <h2>Email is - {inputChange.email}</h2>
    </div>
  );
}

export default App;