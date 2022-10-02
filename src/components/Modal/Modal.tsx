import "../../css/main.scss";

import {useDispatch} from "react-redux";
import {showClose} from "../../features/Modal/modalSlice";
import React from "react";
import {useNavigate} from "react-router-dom";

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

                <div className="btn-container">
                    <button className="confirm-btn"
                            onClick={()=>onClickCartPage()}
                    >
                        Cart
                    </button>
                    <button className="clear-btn"
                            onClick={()=>dispatch(showClose())}>
                        Close
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Modal;