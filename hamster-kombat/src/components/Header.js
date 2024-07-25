import { faDollarSign } from '@fortawesome/free-solid-svg-icons/faDollarSign'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins } from '@fortawesome/free-solid-svg-icons/faCoins'
import { faGear } from '@fortawesome/free-solid-svg-icons/faGear'
function Header({profitePerHour, level}){
    const levels = {1:'Begginer', 2:'Pro', 3:'Legendary'}
    return<>
        <div className="header-progress">
            <b>{levels[level]}</b>
            <progress id="file" max="100" value={level == 1 ? 20 : level == 2 ? 55 : 100}></progress>
            <div className="profit-per-hour">
                <FontAwesomeIcon icon={faDollarSign}/>
                <div className='coins'>                 
                    <FontAwesomeIcon icon={faCoins}/>
                    <b>{profitePerHour}</b>
                </div>
                <FontAwesomeIcon icon={faGear}/>
            </div>
        </div>
    </>
}

export default Header;