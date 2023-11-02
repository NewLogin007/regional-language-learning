import InputPass from "./inputpass";
import InputUser from "./inputuser";
import Button from "./button";
import "./login.css";

function Login(){

    return<div class="wrapper">
        <InputUser/>
        <InputPass/>
        <Button/>
    </div>
}

export default Login;