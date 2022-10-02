import {Link} from "react-router-dom";
import "../../css/main.scss";
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import {useEffect, useState} from "react";
interface cartValueType{
    id: number;
    name : string;
    price :string;
    img : string;
    cartCount : number;


}

interface cartKeyType {
    [key:number] :cartValueType
}

interface cartObj{
    cartItems :cartKeyType[];

}


function Navbar() :JSX.Element{

    // 각 상품 carCount 전부더해주면 되겟지?


    const cartProducts : cartObj  = useSelector((state: RootState)=>state.cart);

    let {cartItems} = cartProducts;

    const [totalCartCount,setTotalCartCount]= useState<number>(0);


    useEffect(()=>{
        let temp =  cartItems.map((product:any)=>product.cartCount);
        let sum =temp.reduce((a,b)=>a+b,0);
        setTotalCartCount(sum);
    },[cartItems]);

    return(

        <nav>
        <div className="navbar-container">
            <Link to="/"><h2 id="nav-title">Home</h2></Link>

            <Link to={"/Cart"}>
            <div className="nav-bag">

                    <svg xmlns="http://www.w3.org/2000/svg" width="66" height="26" fill="currentColor"

                         className="bi bi-bag-fill" viewBox="0 0 16 16">
                        <path
                            d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
                    </svg>

            <span className="bac-count">
                <span>{totalCartCount}</span>
            </span>




            </div>
            </Link>
        </div>
        </nav>
    )
}

export default Navbar;