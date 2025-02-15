import { faDollarSign } from '@fortawesome/free-solid-svg-icons/faDollarSign'
import { faMoneyBillTrendUp } from '@fortawesome/free-solid-svg-icons/faMoneyBillTrendUp'
import { faUserGroup } from '@fortawesome/free-solid-svg-icons/faUserGroup'
import { faCoins } from '@fortawesome/free-solid-svg-icons/faCoins'
import { faFish } from '@fortawesome/free-solid-svg-icons/faFish'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';

function Navigation({selected}){
 return <>
    <div className='bar-list'>
        <ul>
          <li>
            <Link to={'/'}>
              <FontAwesomeIcon icon={faDollarSign}/>
              Exchange
            </Link>
          </li>
          <li>
            <Link className={selected == 'mine' ? 'active' : undefined} to={'/mine'}>
              <FontAwesomeIcon icon={faMoneyBillTrendUp}/>
              Mine
            </Link>
          </li>
          <li>
            <Link className={selected == 'friends' ? 'active' : undefined} to={'/friends'}>
              <FontAwesomeIcon icon={faUserGroup}/>
              Friends
            </Link>
          </li>
          <li>
            <Link className={selected == 'earn' ? 'active' : undefined} to={'/earn'}>
              <FontAwesomeIcon icon={faCoins}/>
              Earn
            </Link>
          </li>
          <li>
            <Link className={selected == 'airdrop' ? 'active' : undefined} to={'/airdrop'}>
              <FontAwesomeIcon icon={faFish}/>
              Airdrop
            </Link>
          </li>
        </ul>
      </div>
 </>
}

export default Navigation;