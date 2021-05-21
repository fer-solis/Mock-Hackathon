import React from 'react'
import './Header.css'
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
                <i id="shoppingCart" className="material-icons">add_shopping_cart</i>
            </div>
        </div>
        
    )

}

export default Header;