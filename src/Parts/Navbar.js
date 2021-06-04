import '../Css/style.scss'
import { Link } from 'react-router-dom'
function Navbar() {
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
            </a></Link>
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
                  <a class="dropdown-item" href="#">Study In canada</a>
                  <a class="dropdown-item" href="#">Process</a>
                  <a class="dropdown-item" href="#">Scholership</a>
                  <a class="dropdown-item" href="#">Top List Colleges</a>
                </div>
              </li>
              <li><Link to="/contact"><a href="#">Contact</a></Link></li>
              <li><a type="button" data-toggle="modal" data-target="#exampleModal">
                Signin
</a></li>

              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Sign Up Heree</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <form>
                      <div class="form-group">
                          <label for="exampleInputEmail1">Name</label>
                          <input type="text" class="form-control" />
                        </div>
                        <div class="form-group">
                          <label for="exampleInputEmail1">Mobile</label>
                          <input type="text" class="form-control" />
                        </div>
                        <div class="form-group">
                          <label for="exampleInputEmail1">Email address</label>
                          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="form-group">
                          <label for="exampleInputPassword1">Password</label>
                          <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="form-group">
                          <label for="exampleInputPassword1">Confirm Password</label>
                          <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Navbar
