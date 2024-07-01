import './App.css';
import DailyTasks from './components/DailyTasks';
import Navigation from './components/Navigation';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <DailyTasks></DailyTasks>
      <img className='hamster' src='./level1.webp'/>
      <Navigation></Navigation>
    </div>
  );
}

export default App;
