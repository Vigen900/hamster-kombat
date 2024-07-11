import Navigation from './Navigation';
import "./airDrop.css"
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck'
import { faWallet } from '@fortawesome/free-solid-svg-icons/faWallet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Airdrop(){
    return<>
        <div className="App">
            <div className='parent'>
                <div>
                    <img className='fish' src='./level1.webp'/>
                    <h1>Airdrop tasks</h1>
                    <p>
                        Listing is on its way. Tasks will appear below.
                        Complete them to participate in the Airdrop
                    </p>
                </div>
                <b>Tasks list</b>
                <div className='wallet-ton'>
                <FontAwesomeIcon className='faWallet' icon={faWallet}/>
                    Connect your Ton wallet 
                    <FontAwesomeIcon className='faCheck' icon={faCheck}/>
                </div> 
            </div>
            <Navigation selected={'airdrop'}></Navigation>
        </div>
    </>
}
export default Airdrop;