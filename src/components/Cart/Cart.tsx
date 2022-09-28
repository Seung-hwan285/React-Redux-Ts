import {useSelector} from "react-redux";
import {RootState} from "../../store";
import "../../css/cart.scss"
function Cart() :JSX.Element{


    const cart = useSelector((state:RootState)=>state.cart);

    console.log(cart);
    return(
        <div className="cart-container">

            <section>
                <div className="cart-title">
                    <span>Shopping Cart</span>
                </div>
            </section>

            <section>

                <div className="cart-wrapper">

                    <h3 className="product-title">Product</h3>
                    <h3 className="price">Price</h3>
                    <h3 className="quantity">Quantity</h3>
                    <h3 className="total">Total</h3>



                    <hr/>

                    <div className="cart-items">

                    {
                        cart.cartItems ?  cart.cartItems.map((product)=>(

                        <div key={product.id} className="cart-item">


                            <div className="cart-product">

                            <img id="cart-image" src={product.img}/>

                                <div>
                                    <h3>{product.name}</h3>
                                    <button>Remove</button>
                                </div>
                            </div>

                            <div className="cart-price">
                                <span>{product.price}</span>

                            </div>

                            <div className="cart-count-button">
                                <button>
                                    -
                                </button>

                                <div>{product.cartCount}</div>


                                <button>
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
                </div>

            </section>


        </div>
    )
}

export default Cart;