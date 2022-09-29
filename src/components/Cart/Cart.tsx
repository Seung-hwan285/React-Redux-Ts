import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import "../../css/main.scss";

import {deleteCart, minusCartToCount, plusCartToCount} from "../../features/Cart/cartSlice";
function Cart() :JSX.Element{


    const cart = useSelector((state:RootState)=>state.cart);
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


    return(
        <div className="cart-container">


            <div className="cart-title">
                <span>Shopping Cart</span>
            </div>


                <div className="cart-wrapper">

                    <div className="products-column">
                        <h3 className="product-title">Product</h3>
                        <h3 className="price">Price</h3>
                        <h3 className="quantity">Quantity</h3>
                        <h3 className="total">Total</h3>
                    </div>
                    <hr/>

                    <div className="cart-items">
                    {
                        cart.cartItems ?  cart.cartItems.map((product)=>(

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


                    <hr/>
                </div>

                    {/*clear cart (카트 전부 초기화 하는 기능) */}
                    <section>

                        <div className="clear-btn">
                            <button onClick={()=>console.log('ds')}>Clear Cart</button>
                        </div>

                    </section>

                </div>




        </div>
    )
}

export default Cart;