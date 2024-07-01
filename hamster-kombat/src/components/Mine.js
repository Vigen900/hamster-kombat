import Navigation from './Navigation';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons/faDollarSign'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../mine.css"
import {useState} from 'react'
function Mine(){
    const tasks = [
        {cost:1_000_000, img:'', title:'Ceo', profite:1_700, level:2, type:'Pr&Team'},
        {cost:1_000_000, img:'', title:'Market', profite:1_700, level:2, type:'Market'},
        {cost:1_000_000, img:'', title:'Legal', profite:1_700, level:2, type:'Legal'},
        {cost:1_000_000, img:'', title:'Specialist', profite:1_700, level:2, type:'Specialist'},
        {cost:1_000_000, img:'', title:'Specialist', profite:1_700, level:2, type:'Specialist'},
        {cost:1_000_000, img:'', title:'Marketing', profite:1_700, level:2, type:'Pr&Team'},
    ]
    
    const [selectedType, setSelectedType] = useState('Pr&Team')
    function handleChange(type){
        setSelectedType(type)
    }
    return<>
        <div className="App">
            <div className="total-coin">
                <FontAwesomeIcon className='faDollarSign' icon={faDollarSign}/>
                <b>20.000.000</b>
            </div>
            <div className="type-of-market">
                <ul>
                    <li className="pr-team" onClick={()=>{handleChange('Pr&Team')}}>
                        PR&Team
                    </li>
                    <li onClick={()=>{handleChange('Market')}}>
                        Market
                    </li>
                    <li onClick={()=>{handleChange('Legal')}}>
                        Legal
                    </li>
                    <li onClick={()=>{handleChange('Specialist')}}>
                        Specialist
                    </li>
                </ul>
            </div>
            <div className="parent">        
                    {tasks.map((u)=>{
                        return u.type == selectedType && <div className="card">{u.title}{u.level}</div>
                    })}
            </div>
            <Navigation selected={'mine'}></Navigation>
        </div>

    </>
}

export default Mine;