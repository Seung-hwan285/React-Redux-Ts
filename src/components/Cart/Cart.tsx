import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import "../../css/main.scss";

import {clearToCart, deleteCart, minusCartToCount, plusCartToCount} from "../../features/Cart/cartSlice";
import CartTitle from "./CartTitle";
import CartClearButton from "./CartClearButton";
import CartItems from "./CartItems";
function Cart() :JSX.Element{

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
                <CartClearButton/>

                </div>

        </div>
    )
}

export default Cart;