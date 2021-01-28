import './App.css';
import {useState} from "react";

function App() {

  // multiple states
  const [year,setYear] = useState(2050);
  const [manager,setManager] = useState("Ashish");
  const [status,setStatus] = useState("open");
 //first one is  state and another one is function
  const handleManager = () => {
          setManager("surbhi")
  }
 return(
    <>
    <div>
      <h1> Manager on duty: {manager} </h1>
      <button onClick={()=>handleManager()}>
        change manager
      </button>
    </div>
    <div>
    <h2> status: {status} </h2>
    <button onClick={()=> setStatus("open")}>
      open
    </button>
    <button onClick={()=> setStatus("back in 5")}>
      Break
    </button>
    <button onClick={()=> setStatus("closed")}>closed</button>
    </div>
    <div>
      {year}
      <button onClick={()=> setYear(year + 1)}>add year</button>
    </div>

    </>
  )
}

export default App;
