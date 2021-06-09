import '../Css/signin.scss';
import {Link} from 'react-router-dom'
import {useState} from 'react'
import { validate } from '../util/validation.js';
import axios from 'axios';

function Signin(props) {
    let [errors, setErrors] = useState({})
    let [message, setMsg] = useState()
    const onSubmit = (e) => {
        e.preventDefault();
        let fields=e.target.elements
        let error =validate(fields)
        if(Object.keys(error).length>0){
            setErrors(error)
        } 
       else {
            
            var user = {
                name: fields.name.value,
                email: fields.email.value,
                mobile: fields.mobile.value,
                password: fields.password.value,
                c_password: fields.c_password.value,
                
            }
            //console.log("signup",user);
            setErrors(" ")
            let apiurl ="http://127.0.0.1:8000/api/register"
            axios({
                url: apiurl,
                method:"POST",
                data: user
            }).then((response) => {
                setMsg(response.data.message);
                props.history.push("/login")
            }, (error) => {
                console.log("error from signup api", error)
            })
            
        }
    }
    return (
        <>
            <div className="signin">
                <form className="signform" onSubmit={onSubmit}>
                {message=="User already exist." ? <span className="text-danger alert-danger">{message}</span> : <span className="text-success alert-success">{message}</span>}
                <h2>SIGN IN HERE</h2>
                <label className="signlabel">
                        <p class="labelTTxt">ENTER YOUR NAME</p>
                        <input type="text" class="inputSign" name="name" />
                        <div class="line-box">
                            <div class="line"></div>
                        </div>
                        {errors.name ? <span className="text-danger">{errors.name}</span> : null}
                    </label>
                    <label className="signlabel">
                        <p class="labelTTxt">ENTER YOUR EMAIL</p>
                        <input type="text" class="inputSign" name="email" />
                        <div class="line-box">
                            <div class="line"></div>
                        </div>
                        {errors.email ? <span className="text-danger">{errors.email}</span> : null}
                    </label>
                    <label className="signlabel">
                        <p class="labelTTxt">ENTER YOUR PASSWORD</p>
                        <input type="text" class="inputSign" name="password" />
                        <div class="line-box">
                            <div class="line"></div>
                        </div>
                        {errors.password ? <span className="text-danger">{errors.password}</span> : null}
                    </label>
                    <label className="signlabel">
                        <p class="labelTTxt">CONFIRM PASSWORD</p>
                        <input type="text" class="inputSign" name="c_password" />
                        <div class="line-box">
                            <div class="line"></div>
                        </div>
                        {errors.c_password ? <span className="text-danger">{errors.c_password}</span> : null}
                    </label>
                    <label className="signlabel">
                        <p class="labelTTxt">ENTER YOUR MOBILE NUMBER</p>
                        <input type="text" class="inputSign" name="mobile"/>
                        <div class="line-box">
                            <div class="line"></div>
                        </div>
                        {errors.mobile ? <span className="text-danger">{errors.mobile}</span> : null}
                    </label>
                    <button type="submit" className="btn-warning bbtt">submit</button> &nbsp;&nbsp;
                    <Link to="/login"><button type="button" className="btn-info bbtt">Login</button></Link>
                </form>
            </div>
        </>
    )
}
export default Signin