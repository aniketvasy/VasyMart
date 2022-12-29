import React from "react";
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import './cartIcon.css'
import CartHover from "./CartHover";
import { Redirect, useHistory } from "react-router-dom";

const CartIcon = (props)=> {
    const history = useHistory()

    // const totalQuantity = useState((state)=> state.cart.totalQuantity)
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const cart = ()=> {
        console.log('clicked    ')
        let path = '/cart'
        history.push(path)
    }
  

    return(<React.Fragment>
        <div className="cart-wrapper" >
            Home
            <a className="cart-anchor" >
            
            {/* <AiOutlineShoppingCart/> */}
                <div className='cart-icon' onClick={cart}>
                    
                   {totalQuantity === 0 ? '' :<span className="header-span">{totalQuantity}</span>}
                    
                </div>
                
            </a>
            <CartHover />
             Contact Us
            </div>

        
        </React.Fragment>
    )
}

export default CartIcon