import './App.css';
import DailyTasks from './components/DailyTasks';
import Navigation from './components/Navigation';
import Header from './components/Header';
import { useState, useEffect } from 'react';


function App() {
  const [userData, setUserData] = useState({})
  useEffect(()=>{
    fetch('http://localhost:3001/users/66890cb072ef7a31a76e0645').then((data)=>{
      return data.json()
    })
    .then((data)=>{
      setUserData(data)
    }).catch((error)=>{
        console.log(error)
    })
  },[])

  function tap(){
    fetch('http://localhost:3001/users/66890cb072ef7a31a76e0645/tap').then((data)=>{
      return data.json()
    })
    .then((data)=>{
      setUserData(data)
    }).catch((error)=>{
        console.log(error)
    })
  }
  return (
    <div className="App">
      <Header profitePerHour={userData.profitePerHour} level={userData.level}></Header>
      <DailyTasks profite={userData.profite}></DailyTasks>
      <img className='hamster' src='./level1.webp' onClick={(tap)}/>
      <Navigation></Navigation>
    </div>
  );
}

export default App;
