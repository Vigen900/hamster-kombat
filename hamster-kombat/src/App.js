import './App.css';
import DailyTasks from './components/DailyTasks';
import Navigation from './components/Navigation';
import Header from './components/Header';


function App() {
  fetch('http://localhost:3001/users/66890cb072ef7a31a76e0645').then((data)=>{
    return data.json()
  })
  .then((data)=>{
    console.log(data)
  }).catch((error)=>{
      console.log(error)
  })
  return (
    <div className="App">
      <Header></Header>
      <DailyTasks profite={10000}></DailyTasks>
      <img className='hamster' src='./level1.webp'/>
      <Navigation></Navigation>
    </div>
  );
}

export default App;
