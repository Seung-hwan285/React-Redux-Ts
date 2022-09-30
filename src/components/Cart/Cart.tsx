import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import "../../css/main.scss";

import {clearToCart, deleteCart, minusCartToCount, plusCartToCount, productTotal} from "../../features/Cart/cartSlice";
import CartTitle from "./CartTitle";
import CartClearButton from "./CartClearButton";
import CartItems from "./CartItems";
import {Root} from "postcss";
import {useEffect, useState} from "react";


function Cart() :JSX.Element{


    const cartItems = useSelector((state:RootState)=>state.cart);

    console.log(cartItems);


    const dispatch=useDispatch();

    return(
        <div className="cart-container">

            <div className="cart-title">
                <span>Shopping Cart</span>
            </div>

            <div className="cart-wrapper">
                    <CartTitle/>
                    <hr/>
                    <CartItems/>
                    <hr/>
            </div>
            <CartClearButton/>


            <div className="cart-total-money">
                <div className="total-title">
                    <span>total</span>
                    <span>{0}</span>
                </div>

                <div>
                    <span>구매하신 총 가격입니다.</span>
                </div>

                <div>
                    <button>Check out</button>
                </div>

            </div>
        </div>
    );
}

export default Cart;