import '../Css/login.scss';
import {Link,withRouter} from 'react-router-dom'
import {useState,useEffect} from 'react'
import { validate } from '../util/validation.js';
import { connect } from "react-redux"
import axios from 'axios';

function Login(props) {
    let [errors, setErrors] = useState({})
    let [users, setUser] = useState({})
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
                email: fields.email.value,
                password: fields.password.value
            }
            setUser(user);
            setErrors(" ");
            axios({
                url: process.env.REACT_APP_BASE_URL +'api/login',
                method: "post",
                data:user
              }).then((response) => {
                //console.log("response from login api", response.data)
                props.dispatch({
                  type:"LOGIN",
                  payload:response.data
              }) 
              localStorage.setItem('Mytoken', response.data.token);  
              setMsg(response.data.message)
              }, (error) => {
                console.log("error from detail api", error)
              })
        }
        
    }
    function myLogin() {
        setTimeout(() => { props.history.push("/") }
            , 2000);
    }
    return (
        <>
            <div>
                <section className="login-block">
                    <div className="container login">
                        <div className="row">
                            <div className="col-md-4 login-sec">
                            {message=="Login Successfully"?<span className="text-success alert-success">{message}</span>:null}
                            {message=="Login Successfully" ? myLogin() : null}
                                <h2 className="text-center">Login Now</h2>
                                <form className="login-form" onSubmit={onSubmit}>
                                    <div className="form-group">
                                        <label className="text-uppercase">Username</label>
                                        <input type="text" name="email" className="form-control" placeholder="" />
                                        {errors.email ? <span className="text-danger">{errors.email}</span> : null}
                                    </div>
                                    <div className="form-group">
                                        <label className="text-uppercase">Password</label>
                                        <input type="password" name="password" className="form-control" placeholder="" />
                                        {errors.password ? <span className="text-danger">{errors.password}</span> : null}
                                    </div>


                                    <div className="form-check">
                                    <Link to="/signin"> <button type="button" className="btn btn-signup float-left">Register</button></Link>
                                        <button type="submit" className="btn btn-login float-right">Login</button>
                                    </div>

                                </form>
                            </div>
                            <div className="col-md-8 banner-sec">
                                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                    </ol>
                                    <div className="carousel-inner" role="listbox">
                                        <div className="carousel-item active">
                                            <img className="d-block img-fluid" src="https://static.pexels.com/photos/33972/pexels-photo.jpg" alt="First slide" />
                                            <div className="carousel-caption d-none d-md-block">
                                                <div className="banner-text">
                                                    <h2>This is Heaven</h2>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block img-fluid" src="https://images.pexels.com/photos/7097/people-coffee-tea-meeting.jpg" alt="First slide" />
                                            <div className="carousel-caption d-none d-md-block">
                                                <div className="banner-text">
                                                    <h2>This is Heaven</h2>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block img-fluid" src="https://images.pexels.com/photos/872957/pexels-photo-872957.jpeg" alt="First slide" />
                                            <div className="carousel-caption d-none d-md-block">
                                                <div className="banner-text">
                                                    <h2>This is Heaven</h2>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
Login = withRouter(Login)
export default connect(function (state, prop) {
    //console.log(state,"users login")
    return {
        isloggedin: state?.isloggedin,
        //users: state?.user
    }
})(Login)