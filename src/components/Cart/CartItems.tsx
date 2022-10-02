import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {deleteCart, minusOfCount, plusOfCount} from "../../features/Cart/cartSlice";
import CartItemList from "./CartItemList";

export default function CartItems(): JSX.Element{

    const {cartItems} = useSelector((state :RootState)=>state.cart);

    const dispatch = useDispatch();

    const onClickDelete=(product:any)=>{
        dispatch(deleteCart(product));
    }

    const onClickMinus=(product: any)=>{
        dispatch(minusOfCount(product));
    }

    const onClickPlus=(product:any)=>{
        dispatch(plusOfCount(product));
    }


    return (
        <div className="cart-items">
            {
                cartItems ?  cartItems.map((product :any)=>(
                    <CartItemList product={product}/>
                ))  :  null }



        </div>

    )
}
