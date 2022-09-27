import "../../css/modal.scss";
import {dispatch} from "jest-circus/build/state";
import {useDispatch} from "react-redux";
import {showClose} from "../../features/Home/modalSlice";
import React from "react";
import {addToCart} from "../../features/Cart/cartSlice";
import {useNavigate} from "react-router-dom";
import {useGetAllProductsQuery} from "../../features/Home/productApi";

function Modal() : JSX.Element {

    const dispatch =useDispatch();


    const history = useNavigate();

    const onClickCartPage=()=>{
        dispatch(showClose());
        history('/Cart');
    }

    return(
        
        <div className ="modal-container">
            <div className="modal">
                <h3 id="modal-title">선택하신 상품이 장바구니에 추가되었습니다.</h3>
            </div>



                <div className="btn-container">
                    <button className="btn confirm-btn"
                            onClick={()=>onClickCartPage()}
                    >
                        장 바구니 이동하기
                    </button>
                    <button className="btn clear-btn"
                            onClick={()=>dispatch(showClose())}>
                        창 닫기
                    </button>

                </div>






        </div>
    )
}

export default Modal;