import React, {useCallback, useState} from "react";
import {useDispatch} from "react-redux";
import {Join} from "../../features/Sign/joinSlice";

const pattern3 = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

function SignUp() :JSX.Element{

    const dispatch = useDispatch();
    const [name,setName] =useState<string>('');
    const [password,setPassword]= useState<string>('');

    const [nameMessage,setNameMessage]= useState<string>('');
    const [passworMessage,setPasswordMessage]= useState<string>('');

    const [isName,setIsName]= useState<boolean>(true);
    const [isPassword,setIsPassword]= useState<boolean>(true);


    const onChangeId=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setName(e.target.value);
        if(e.target.value.length < 4 || pattern3.test(e.target.value)){
            setNameMessage('아이디는 4자리 이상 한글이 들어갈 수 없습니다.');
            setIsName(false);
        }else{
            setIsName(true);
        }
    }

    const onChangePassword=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setPassword(e.target.value);
        if(e.target.value.length < 8){
            setPasswordMessage('비밀번호는 8자리 이상으로 작성해주세요');
            setIsPassword(false);
        }else{
            setIsPassword(true);
        }
    }

    const onSubmit=(e:React.ChangeEvent<HTMLFormElement>)=>{
        e.preventDefault();
        dispatch<any>(Join({name,password}));
    }

    return (
        <div className="auth-container">
            <form className="auth-form" onSubmit={onSubmit}>
                <div className="content">
                    <h3>Sign</h3>
                    <div className="form-group-Id">
                        <label>Id</label>
                        <input
                            placeholder="아이디 입력"
                            type="text"
                            onChange={onChangeId}
                        />

                        {isName ? '' : <span className={`success-${isName ? `success` : `error`}`}>{nameMessage}</span>}
                    </div>

                    <div className="form-group-password">
                        <label>Password</label>
                        <input
                            placeholder="비밀번호 입력"
                            type="password"
                            onChange={onChangePassword}
                        />
                        {isPassword ? '' : <span className={`success-${isPassword ? `success` : `error`}`}>{passworMessage}</span>}
                    </div>

                    <button
                        type="submit"
                        className="form-group-submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SignUp;