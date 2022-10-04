function Auth(){

    return (
        <div className="auth-container">
            <form className="auth-form">
                <div className="content">

                    <h3>Sign</h3>
                    <div className="form-group-Id">
                        <input
                        placeholder="아이디 입력"
                        type="text"
                        />
                    </div>

                    <div className="form-group-password">
                        <input
                            placeholder="비밀번호 입력"
                            type="password"
                        />

                    </div>

                </div>
            </form>
        </div>
    )
}

export default Auth;