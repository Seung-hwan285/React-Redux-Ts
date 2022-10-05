function SignUp(){

    return (
        <div className="auth-container">
            <form className="auth-form">
                <div className="content">

                    <h3>Sign</h3>
                    <div className="form-group-Id">
                        <label>Id</label>
                        <input
                        placeholder="아이디 입력"
                        type="text"
                        />
                    </div>

                    <div className="form-group-password">
                        <label>Password</label>
                        <input
                            placeholder="비밀번호 입력"
                            type="password"
                        />

                    </div>


                    <button
                        className="form-group-submit"
                    >Submit</button>
                </div>
            </form>
        </div>
    );
}

export default SignUp;