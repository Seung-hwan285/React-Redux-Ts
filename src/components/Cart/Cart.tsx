import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import "../../css/main.scss";

import {clearToCart, deleteCart, minusCartToCount, plusCartToCount} from "../../features/Cart/cartSlice";
import CartTitle from "./CartTitle";
import CartClearButton from "./CartClearButton";
import CartItems from "./CartItems";
import {Root} from "postcss";
import {useEffect, useState} from "react";


function Cart() :JSX.Element{

    const [number,setNumber] =useState<number>(0);

    const cartItems = useSelector((state:RootState)=>state.cart);
    console.log(cartItems);

    const getTotal = (props :any)=>{

        return props.cartItems.reduce((acc :number,val:any)=>{
            acc+=Number(val.price);
            return acc;
        },0);
    }

    let temp =getTotal(cartItems);

    useEffect(()=>{
        setNumber(number+temp);
    },[]);


    console.log(number);







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
                    <span>{number}</span>
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