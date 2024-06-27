import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons/faCalendarDays'
import { faVault } from '@fortawesome/free-solid-svg-icons/faVault'
import { faDiceThree } from '@fortawesome/free-solid-svg-icons/faDiceThree'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons/faDollarSign'
import { faMoneyBillTrendUp } from '@fortawesome/free-solid-svg-icons/faMoneyBillTrendUp'
import { faUserGroup } from '@fortawesome/free-solid-svg-icons/faUserGroup'
import { faCoins } from '@fortawesome/free-solid-svg-icons/faCoins'
import { faFish } from '@fortawesome/free-solid-svg-icons/faFish'
function App() {
  return (
    <div className="App">
      <div className='combo'>
        <div className='daily-reward'>
          daily reward
          <br/><FontAwesomeIcon icon={faCalendarDays}/>
        </div>
        <div className='daily-cipher'>
          daily cipher
          <br/><FontAwesomeIcon icon={faVault}/>
        </div>
        <div className='daily-combo'>
          daily combo
          <br/><FontAwesomeIcon icon={faDiceThree}/>
        </div>
      </div>
      <img className='hamster' src='./level1.webp'/>
      <div className='bar-list'>
        <ul>
          <li>
            <FontAwesomeIcon icon={faDollarSign}/>
            Exchange
          </li>
          <li>
            <FontAwesomeIcon icon={faMoneyBillTrendUp}/>
            Mine
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup}/>
            Friends
          </li>
          <li>
          <FontAwesomeIcon icon={faCoins}/>
            Earn
          </li>
          <li>
            <FontAwesomeIcon icon={faFish}/>
            Airdrop
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
