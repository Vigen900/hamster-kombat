import Navigation from './Navigation';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons/faDollarSign'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Mine(){
    const tasks = [
        {cost:1_000_000, img:'', title:'', profite:1_700, level:2}
    ]
    return<>
        <div className="App">
            <div className="total-coin">
                <FontAwesomeIcon className='faDollarSign' icon={faDollarSign}/>
                <b>20.000.000</b>
            </div>
            <div className="type-of-market">
                <ul>
                    <li className="pr-team">
                        PR&Team
                    </li>
                    <li>
                        Market
                    </li>
                    <li>
                        Legal
                    </li>
                    <li>
                        Specialist
                    </li>
                </ul>
            </div>
            <div className="parent">
                <div className="right">
                    <div className="ceo">
                        Ceo
                        {tasks.level}
                    </div>
                    <div className="it-team">
                        IT-team
                    </div>
                    <div className="fishbook">
                        FishBook
                    </div>
                    <div className="x">
                        X
                    </div>
                </div>
                <div className="left">
                    <div className="marketing">
                        Marketing
                    </div>
                    <div className="support">
                        Support
                    </div>
                    <div className="fish-coin">
                        FishCoin
                    </div>
                    <div className="telegram">
                        Telegram
                    </div>
                        
                </div>
            </div>
            <Navigation></Navigation>
        </div>

    </>
}

export default Mine;