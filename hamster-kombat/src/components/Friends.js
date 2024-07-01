import Navigation from './Navigation';
import '../friends.css'

function Friends(){
    const friends = [
        {name:'Gagik', profite:280_000, progress:'silver', profitePerHour:25_000},
        {name:'Jack', profite:280_000, progress:'silver', profitePerHour:25_000},
        {name:'Armen', profite:280_000, progress:'silver', profitePerHour:25_000},
        {name:'Bob', profite:280_000, progress:'silver', profitePerHour:25_000}
    ]
    
    return<>
        <div className="App">
        <div className="parent">        
                    {friends.map((u)=>{
                        return <div className="card">{u.name} <br/>{u.progress} <br/>{u.profite}</div>
                    })}
            </div>
            <Navigation selected={'friends'}></Navigation>
        </div>
    </>
}

export default Friends;