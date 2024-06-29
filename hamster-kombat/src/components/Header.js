import { faDollarSign } from '@fortawesome/free-solid-svg-icons/faDollarSign'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins } from '@fortawesome/free-solid-svg-icons/faCoins'
import { faGear } from '@fortawesome/free-solid-svg-icons/faGear'
function Header(){
    return<>
        <div className="header-progress">
            Begginer - 1/3
            <progress id="file" max="100" value="1"></progress>
            <div className="profit-per-hour">
                <FontAwesomeIcon icon={faDollarSign}/>
                <div className='coins'>                 
                    <FontAwesomeIcon icon={faCoins}/>
                    <b>+1.2M</b>
                </div>
                <FontAwesomeIcon icon={faGear}/>
            </div>
        </div>
    </>
}

export default Header;