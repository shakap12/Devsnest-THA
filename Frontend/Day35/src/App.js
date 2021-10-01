import { useState,useEffect } from 'react';
import Template from './Template';
import Meme from './Meme';
import './App.css';

function App() {
const [Memes,setMemes]=useState([]);
const [trim,setTrim]=useState(null);
useEffect(()=>{
  fetch("https://api.imgflip.com/get_memes")
  .then(res=>res.json())
  .then(data => {
    setMemes(data.data.memes); 
  });
},[]);
  return (
    <div className="App">
<h1>Meme Generator</h1>
{trim===null?(<Template Memes={Memes} setTrim={setTrim}/>):(<Meme trim={trim} setTrim={setTrim}/>)}
   
  </div>
  );
}

export default App;