import Navigation from './Navigation';
import "./earn.css"
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons/faCalendarDays'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Earn(){
    return<>
        <div className='App'>
            <div className='parent'>
                <img className='gold-coin' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVH1FmXdhO5VQE2cs_Ufzf2jkNKEOGxByz9g&s'/>
                <h1 className='coint-text'>Earn more coin</h1>
            </div>
            <div className='daily-tasks'>
                <b>daily tasks</b>
                <br/><FontAwesomeIcon className='faCalendar' icon={faCalendarDays}/>
            </div>
            <Navigation selected={'earn'}></Navigation>
        </div>
        
    </>
}

export default Earn;