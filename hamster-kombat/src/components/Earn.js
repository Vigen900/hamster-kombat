import Navigation from './Navigation';
import "./earn.css"
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons/faCalendarDays'
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Earn(){
    return<>
        <div className='App'>
            <div className='parent'>
                <img className='gold-coin' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVH1FmXdhO5VQE2cs_Ufzf2jkNKEOGxByz9g&s'/>
                <h1 className='coint-text'>Earn more coin</h1>
            </div>
            <b>daily tasks</b>
            <div className='daily-tasks'>
                <br/><FontAwesomeIcon className='faCalendar' icon={faCalendarDays}/>
                daily reward
                <FontAwesomeIcon className='faCheck' icon={faCheck}/>
            </div>
            <Navigation selected={'earn'}></Navigation>
        </div>
        
    </>
}

export default Earn;