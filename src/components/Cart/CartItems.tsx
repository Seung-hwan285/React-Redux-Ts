import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {deleteCart, minusCartToCount, plusCartToCount} from "../../features/Cart/cartSlice";
import CartClearButton from "./CartClearButton";

export default function CartItems(): JSX.Element{

    const {cartItems} = useSelector((state :RootState)=>state.cart);



    const dispatch = useDispatch();

    const onClickDelete=(product:any)=>{
        dispatch(deleteCart(product));
    }

    const onClickMinus=(product: any)=>{
        dispatch(minusCartToCount(product));
    }

    const onClickPlus=(product:any)=>{
        dispatch(plusCartToCount(product));
    }


    return (
        <div className="cart-items">
            {
                cartItems ?  cartItems.map((product :any)=>(

                    <div key={product.id} className="cart-item">


                        <div className="cart-product">

                            <img id="cart-image" src={product.img}/>

                            <div className="delete-btn">
                                <h3>{product.name}</h3>
                                <button onClick={()=>onClickDelete(product)}>Remove</button>
                            </div>
                        </div>

                        <div className="cart-price">
                            <span>{product.price}</span>

                        </div>

                        <div className="cart-count-button">
                            <button className="minus-btn"
                                    onClick={()=>onClickMinus(product)}
                            >
                                -
                            </button>

                            <div>{product.cartCount}</div>

                            <button className="plus-btn"
                                    onClick={()=>onClickPlus(product)}
                            >
                                +
                            </button>
                        </div>

                        <div className="total">
                            {`${product.price * product.cartCount}`}
                        </div>
                    </div>


                ))  :  null }



        </div>

    )
}
