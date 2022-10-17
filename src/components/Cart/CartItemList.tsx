import {useDispatch} from "react-redux";
import {deleteCart, minusOfCount, plusOfCount} from "../../features/Cart/cartSlice";

interface CartItemListProps {
    product : any
}

interface ProductItem{
    id: number;
    name :string;
    img :string;
    price : string;
    cartCount : number;
}


function CartItemList({product}:CartItemListProps):JSX.Element{

    const {id,name,img,price,cartCount}:ProductItem= product

    const dispatch = useDispatch();

    const onClickDelete =(product:any)=>{
        dispatch(deleteCart(product));
    }

    const onClickMinus=(product: any)=>{
        dispatch(minusOfCount(product));
    }

    const onClickPlus=(product:any)=>{
        dispatch(plusOfCount(product));
    }


    return (
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

                <div id="cart-count">{product.cartCount}</div>

                <button className="plus-btn"
                        onClick={()=>onClickPlus(product)}
                >
                    +
                </button>
            </div>

            <div className="totalValue">
                {`${product.price * product.cartCount}`}
            </div>
        </div>
    )
}

export default CartItemList;
