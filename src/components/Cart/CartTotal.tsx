import {useSelector} from "react-redux";
import {RootState} from "../../store";

export default function CartTotal() : JSX.Element{
    const {cartItems,cartToTotal} = useSelector((state:RootState)=>state.cart);

    return (
        <div className="cart-total-money">
            <div className="total-title">
                <span>$total</span>
                <span>{cartToTotal}</span>
            </div>

            <div>
                <span>구매하신 총 가격입니다.</span>
            </div>

            <div>
                <button>Check out</button>
            </div>

        </div>
    )
}