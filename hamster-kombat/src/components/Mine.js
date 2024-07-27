import Navigation from './Navigation';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons/faDollarSign'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../mine.css"
import {useState, useEffect} from 'react'
function Mine({selected}){
    const [cards, setCards] = useState([])
    const [tasks, setTasks] = useState([])
    const [userData, setUserData] = useState({})
    useEffect(()=>{
        const cardRequest = fetch('http://localhost:3001/cards').then((data)=>{
            return data.json()
        })
        const userRequest = fetch('http://localhost:3001/users/66890cb072ef7a31a76e0645').then((data)=>{
            return data.json()
          })
          Promise.all([cardRequest, userRequest])
        .then(([cards, userData])=>{
            setCards(cards)
            setUserData(userData)
            const tasks = transformCards(cards, userData)
            console.log(tasks)
            setTasks(tasks)
        }).catch((error)=>{
            console.log(error)
        })
    },[])
    
    const [selectedType, setSelectedType] = useState('Pr&Team')
    function handleChange(type){
        setSelectedType(type)
    }

    function transformCards(cards, userData){
        const tasks = []
        cards.forEach((card)=>{
          const userCard = userData.cards.find((element)=> element.id == card._id)
          const task = {
            id: card._id,
            image: card.image,
            type: card.type,
            level: getNextCard(card._id, userCard?.level || 0 , cards),
          }
          tasks.push(task)
          console.log(task)
        })
        return tasks
    }

    function getNextCard(id, currentLevel, cards) {

        const card =  (cards.find((element)=> element._id == id))
        if (!card){
            return
        }
        const level = (card.levels.find((element)=> element.level == currentLevel + 1))
        return level
    }

    return<>
        <div className="App">
            <div className="total-coin">
                <FontAwesomeIcon className='faDollarSign' icon={faDollarSign}/>
                {userData.profite}
            </div>
            <div className="type-of-market">
                <ul>
                    <li className={selected == 'Pr&Team'}  onClick={()=>{handleChange('Pr&Team')}}>
                        PR&Team
                    </li>
                    <li className={selected == 'Market'} onClick={()=>{handleChange('Market')}}>
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
                        <div className="card">{u.title}<br/>
                            <img src={u.image} width={'100%'}/>
                            Level: {u.level.level} <br/>
                            Profite: {u.level.profite} <br/>
                            Cost: {u.level.cost}
                        </div>
                    )})}
            </div>
            <Navigation selected={'mine'}></Navigation>
        </div>
    </>
}


export default Mine;