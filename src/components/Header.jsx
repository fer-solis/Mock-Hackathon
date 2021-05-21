import React from 'react'
import totalLookLogo from '../assets/totalLookLogo.png';
import avatarUser from '../assets/avatarUser.png'
import shoppingCart from '../assets/shoppingCart.png'
import {useHistory} from 'react-router-dom'

const Header = () => {

    const history = useHistory()

    const goHome = () =>{
        history.push('/')
    }
   

    return (

        <div>
            <img id="logoHeader" src={totalLookLogo} onClick={goHome}></img>
            <div id="containerHeader">
                <img id="avatarUser" src={avatarUser}></img>
                <img id="shoppingCart" src={shoppingCart}></img>
            </div>
        </div>
        
    )

}

export default Header;