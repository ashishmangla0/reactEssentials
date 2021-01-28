import './App.css';
import {useState,useEffect} from "react";

function App() {

  // useEfffect and updating
  const [val,SetVal] = useState("");
  const [val2,SetVal2] = useState("");

useEffect(() => {
  console.log(val);
},[val]);

useEffect(() => {
  console.log(val2);
},[val,val2])

 return(
    <>
    <label>
Favorite Phrase :
<input value={val} onChange={(e) => SetVal(e.target.value)} />
    </label>
    <label>
Favorite Phrase :
<input value={val2} onChange={(e) => SetVal2(e.target.value)} />
    </label>


    </>
  )
}

export default App;
