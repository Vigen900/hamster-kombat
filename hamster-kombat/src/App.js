import './App.css';
import DailyTasks from './components/DailyTasks';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <DailyTasks></DailyTasks>
      <img className='hamster' src='./level1.webp'/>
      <Navigation></Navigation>
    </div>
  );
}

export default App;
