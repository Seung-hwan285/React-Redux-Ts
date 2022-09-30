import {clearToCart} from "../../features/Cart/cartSlice";
import {useDispatch} from "react-redux";

export default function CartClearButton():JSX.Element{

    const dispatch = useDispatch();

    const onClickClearToCart=()=>{
        dispatch(clearToCart());
    }

    return (

        <div className="clear-btn">
            <button onClick={onClickClearToCart}>Clear Cart</button>
        </div>
    )
}