import { faCalendarDays } from '@fortawesome/free-solid-svg-icons/faCalendarDays'
import { faVault } from '@fortawesome/free-solid-svg-icons/faVault'
import { faDiceThree } from '@fortawesome/free-solid-svg-icons/faDiceThree'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function DailyTasks(){
    return<>
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
    </>
}

export default DailyTasks;