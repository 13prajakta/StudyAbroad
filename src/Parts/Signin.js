import '../Css/signin.scss';
import {Link} from 'react-router-dom'
function Signin() {
    return (
        <>
            <div className="signin">
                <form className="signform">
                <h2>SIGN IN HERE</h2>
                <label className="signlabel">
                        <p class="labelTTxt">ENTER YOUR NAME</p>
                        <input type="text" class="inputSign" />
                        <div class="line-box">
                            <div class="line"></div>
                        </div>
                    </label>
                    <label className="signlabel">
                        <p class="labelTTxt">ENTER YOUR EMAIL</p>
                        <input type="text" class="inputSign" />
                        <div class="line-box">
                            <div class="line"></div>
                        </div>
                    </label>
                    <label className="signlabel">
                        <p class="labelTTxt">ENTER YOUR PASSWORD</p>
                        <input type="text" class="inputSign" />
                        <div class="line-box">
                            <div class="line"></div>
                        </div>
                    </label>
                    <label className="signlabel">
                        <p class="labelTTxt">ENTER YOUR MOBILE NUMBER</p>
                        <input type="text" class="inputSign" />
                        <div class="line-box">
                            <div class="line"></div>
                        </div>
                    </label>
                    <label className="signlabel">
                        <p class="labelTTxt">ENTER YOUR ADDRESS</p>
                        <input type="text" class="inputSign" />
                        <div class="line-box">
                            <div class="line"></div>
                        </div>
                    </label>
                    <button type="submit" className="btn-warning bbtt">submit</button> &nbsp;&nbsp;
                    <Link to="/login"><button type="button" className="btn-info bbtt">Login</button></Link>
                </form>
            </div>
        </>
    )
}
export default Signin