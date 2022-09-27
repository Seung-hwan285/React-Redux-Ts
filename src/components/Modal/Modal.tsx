import "../../css/modal.scss";
import {dispatch} from "jest-circus/build/state";
import {useDispatch} from "react-redux";
import {showClose} from "../../features/Home/modalSlice";

function Modal(){


    const dispatch =useDispatch();
    return(
        
        <div className ="modal-container">
            <div className="modal">
                <h3 id="modal-title">상품 추가 하시겠습니까?</h3>
            </div>

            <div className="btn-container">
                <button className="btn confirm-btn">
                    추가
                </button>

                <button className="btn clear-btn"
                    onClick={()=>dispatch(showClose())}
                >
                    취소
                </button>


            </div>


        </div>
    )
}

export default Modal;