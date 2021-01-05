import './App.css';
import {useState} from "react";

function App() {
  const [emotion,setEmotion] = useState("happy");
  console.log(emotion); //first one is  state and another one is function
  return(
    <>
      <h1> current emotion is {emotion}</h1>
      <button onClick={()=>setEmotion('Happy')}>
        happy
      </button>
      <button onClick={()=>setEmotion('sad')}>
        sad
      </button>
      <button onClick={()=>setEmotion('Enthusiastic')}>
        Enthusiastic
      </button>
    </>
  )
}

export default App;
