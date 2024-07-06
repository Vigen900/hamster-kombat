import Navigation from './Navigation';
import '../friends.css'
import { faClone } from '@fortawesome/free-solid-svg-icons/faClone'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Friends(){
    const friends = [
        {name:'Gagik', profite:280_000, progress:'silver', profitePerHour:25_000},
        {name:'Jack', profite:280_000, progress:'silver', profitePerHour:25_000},
        {name:'Armen', profite:280_000, progress:'silver', profitePerHour:25_000},
        {name:'Bob', profite:280_000, progress:'silver', profitePerHour:25_000}
    ]
    
    return<>
        <div className="App">
            <b>List of you`r friends</b>
            <div className="friends-parent">        
                {friends.map((u)=>{
                    return <div className="friends-card">
                                <span className='name'>{u.name}</span>
                                <br/>
                                {u.progress} 
                                <br/>
                                {u.profite}
                            </div>
                            
                })}
                <div>
                    <button className='friends-invite'>Invite a friend</button>
                    <a className='copy-link' href=''><FontAwesomeIcon className='faClone' icon={faClone}/></a>
                </div>
            </div>
            <Navigation selected={'friends'}></Navigation>
        </div>
    </>
}

export default Friends;