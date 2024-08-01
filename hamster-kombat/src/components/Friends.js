import Navigation from './Navigation';
import '../friends.css'
import { faClone } from '@fortawesome/free-solid-svg-icons/faClone'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react';

function Friends(){
    const [newfriends, setNewFriends] = useState([])
        useEffect(()=>{
            fetch('http://localhost:3001/users/66890cb072ef7a31a76e0645/friends')
            .then((data)=>{
                return data.json()
            })
            .then((data)=>{
                console.log(data)
                setNewFriends(data)
            })
            .catch((error)=>{
                console.error('error', error);
            })
        },[])
    
    return<>
        <div className="App">
        <b>List of you`r friends</b>
            <div className="friends-parent">        
                {newfriends.map((u)=>{
                    return <div className="friends-card">                      
                                <br/>
                                {u.users} 
                                <br/>
                                {u.profitePerHour}
                                <br/>
                                {u.progress}
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