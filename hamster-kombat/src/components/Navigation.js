import { faDollarSign } from '@fortawesome/free-solid-svg-icons/faDollarSign'
import { faMoneyBillTrendUp } from '@fortawesome/free-solid-svg-icons/faMoneyBillTrendUp'
import { faUserGroup } from '@fortawesome/free-solid-svg-icons/faUserGroup'
import { faCoins } from '@fortawesome/free-solid-svg-icons/faCoins'
import { faFish } from '@fortawesome/free-solid-svg-icons/faFish'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Navigation(){
 return <>
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
 </>
}

export default Navigation;