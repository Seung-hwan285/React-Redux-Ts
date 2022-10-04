import {useEffect} from "react";

interface AurhProps {

    showNav : boolean;
}

function Auth(props:any){

    console.log(props.showNav);



    return (
        <div>
            {`Auth`}
        </div>
    )
}

export default Auth;