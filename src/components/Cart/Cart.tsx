import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import "../../css/main.scss";

import {productTotal} from "../../features/Cart/cartSlice";
import CartTitle from "./CartTitle";
import CartClearButton from "./CartClearButton";
import CartItems from "./CartItems";
import {useEffect, useState} from "react";
import CartTotal from "./CartTotal";


function Cart() :JSX.Element{


    const {cartItems,cartToTotal} = useSelector((state:RootState)=>state.cart);



    useEffect(()=>{
        dispatch(productTotal());
    },[cartItems]);




    const dispatch=useDispatch();

    return(
        <div className="cart-container">

            <div className="cart-wrapper">
                    <CartTitle/>
                    <hr/>
                    <CartItems/>
                    <hr/>
            </div>
            
            <CartClearButton/>

            <CartTotal/>
        </div>
    );
}

export default Cart;