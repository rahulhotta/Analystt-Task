import {React, useEffect, useState} from 'react' 
import './App.css';
import axios from "axios";
import UserList from './Components/UserList/UserList';
const url = 'https://jsonplaceholder.typicode.com/users'
function App() {
  const [data, setData] = useState(null);
  useEffect(()=>{
    axios.get(url).then((response)=>{
      setData(response.data);
    })
  },[]);


  if(!data) return null;

  console.log(data)
  return (
    <div className="App">
      <UserList data={data}/>
  
    </div>
  );
}

export default App;
