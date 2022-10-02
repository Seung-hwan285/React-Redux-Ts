import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {deleteCart, minusOfCount, plusOfCount} from "../../features/Cart/cartSlice";
import CartItemList from "./CartItemList";

export default function CartItems(): JSX.Element{

    const {cartItems} = useSelector((state :RootState)=>state.cart);

    return (
        <div className="cart-items">
            {
                cartItems ?  cartItems.map((product :any)=>(
                    <CartItemList product={product}/>
                ))  :  null
            
            }
        </div>

    )
}
