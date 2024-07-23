import Navigation from './Navigation';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons/faDollarSign'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../mine.css"
import {useState} from 'react'
function Mine(){
    const [tasks, setTasks] = useState([])
        fetch('http://localhost:3001/cards').then((data)=>{
            return data.json()
        })
        .then((data)=>{
            setTasks(data)
        }).catch((error)=>{
            console.log(error)
        })
    
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
                        return (u.type == selectedType && 
                        <div className="card">{u.title}{u.level}
                            <img src={u.image} width={'100%'}/>
                        </div>
                    )})}
            </div>
            <Navigation selected={'mine'}></Navigation>
        </div>
    </>
}

export default Mine;