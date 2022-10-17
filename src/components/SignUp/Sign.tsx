import React, {useCallback, useState} from "react";
import {useDispatch} from "react-redux";
import {Join} from "../../features/Sign/joinSlice";

interface userType{
    name :string,
    password : string,
}


function SignUp() :JSX.Element{

    const dispatch = useDispatch();
    const [name,setName] =useState('');
    const [password,setPassword]= useState('');


    const onChangeId=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setName(e.target.value);
    }

    const onChangePassword=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setPassword(e.target.value);
        console.log(password);
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
                    </div>

                    <div className="form-group-password">
                        <label>Password</label>
                        <input
                            placeholder="비밀번호 입력"
                            type="password"
                            onChange={onChangePassword}
                        />
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