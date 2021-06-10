import '../Css/style.scss'
import { Link } from 'react-router-dom'
import { connect } from "react-redux"
function Navbar(props) {
  let logout = function (event) {
    event.preventDefault()
    props.dispatch({
        type: "LOGOUT"
    })

}
  return (
    <>
      <nav class="navbar">
        <div class="container">

          <div class="navbar-header">
            <button class="navbar-toggler" data-toggle="open-navbar1">
              <span></span>
              <span></span>
              <span></span>
            </button>
            <Link to="/"><a href="#">
              <h4>STUDY<span>Abroad</span></h4>
            </a></Link> &nbsp;&nbsp;&nbsp;
            <a><strong className="text-warning">Welcome!</strong> {props.user}</a>
          </div>

          <div class="navbar-menu" id="open-navbar1">
            <ul class="navbar-nav">
              <li class="active"> <Link to="/"><a href="#">Home</a></Link></li>
              <li><Link to="/about"><a href="#">About</a></Link></li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Category
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to="/study"><a class="dropdown-item" href="#">Study In canada</a></Link>
                  <Link to="/process"><a class="dropdown-item" href="#">Exam & Process</a></Link>
                  <Link to="/scholer"><a class="dropdown-item" href="#">Scholership</a></Link>
                  <Link to="/collage"><a class="dropdown-item" href="#">Top List Colleges</a></Link>
                </div>
              </li>
              <li><Link to="/contact"><a href="#">Contact</a></Link></li>
              {props.isloggedin?<li><a href="#" onClick={logout}>Logout</a></li> 
              :
              <li><Link to="/login">Login</Link></li> }
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
export default connect(function (state, prop) {
  console.log("login status",state)
  return {
      isloggedin: state?.isloggedin,
      user:state?.user?.user?.name
  }
})(Navbar)
