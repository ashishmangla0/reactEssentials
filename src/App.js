import './App.css';
import {useState,useEffect} from "react";

function App() {

  // useEfffect
  const [checked,setChecked] = useState(false);
useEffect(() => {
  alert(`checked: ${checked.toString()}`)
})

 return(
    <>
    <input type="checkbox" value={checked} onChange={() => setChecked(!checked)}/>
    {checked ? "checked": "not checked"}

    </>
  )
}

export default App;
