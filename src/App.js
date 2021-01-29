import './App.css';
import {useState,useEffect} from "react";

function App() {

  // fetch data usoing useEfffect

const GithubUser = ({login}) =>{

const [data,setDate] = useState(null);
useEffect(()=>{
  fetch(`https://api.github.com/users/${login}`)
  .then(res => res.json())
  .then(setDate)
  .catch(console.error)
},[]);

if(data){
  return <div>
  {JSON.stringify(data)}
<h1>
  {data.login}
</h1>
<img src={data.avatar_url} />
  </div>
}
return null

}



 return(
    <>

    <GithubUser login="ashishmangla0"/>



    </>
  )
}

export default App;
