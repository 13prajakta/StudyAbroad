import '../Css/style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faLinkedin, faDribbble, faGooglePlus } from '@fortawesome/free-brands-svg-icons'
function Footer() {
    return (
        <>
            <div>

                <footer class="page-footer font-small mdb-color pt-4" style={{backgroundColor:"#1e1f32"}}>


                    <div class="container-fluid text-center text-md-left">

                        <div class="row text-center text-md-left mt-3 pb-3">


                            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 class=" mb-4"><h4>STUDY<span style={{color:"#ffc107"}}>Abroad</span></h4></h6>
                                <p>we truly believe that students who study abroad become the next generation of globally-minded adventurers and leaders - and we want more of you to do it.</p>
                            </div>


                            <hr class="w-100 clearfix d-md-none" />


                            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 class="text-uppercase mb-4 font-weight-bold">Products</h6>
                                <p>
                                    <a href="#!">Masters</a>
                                </p>
                                <p>
                                    <a href="#!">Bachelors</a>
                                </p>
                                <p>
                                    <a href="#!">MBA</a>
                                </p>
                                <p>
                                    <a href="#!">Diploma</a>
                                </p>
                            </div>


                            <hr class="w-100 clearfix d-md-none" />


                            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 class="text-uppercase mb-4 font-weight-bold">Useful links</h6>
                                <p>
                                    <a href="#!">Sign Up</a>
                                </p>
                                <p>
                                    <a href="#!">About</a>
                                </p>
                                <p>
                                    <a href="#!">Category</a>
                                </p>
                                <p>
                                    <a href="#!">Help</a>
                                </p>
                            </div>


                            <hr class="w-100 clearfix d-md-none" />


                            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
                                <p>
                                    <i class="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                                <p>
                                    <i class="fas fa-envelope mr-3"></i> info@gmail.com</p>
                                <p>
                                    <i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                                <p>
                                    <i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
                            </div>


                        </div>


                        

                        <div class="row d-flex align-items-center" style={{backgroundColor:"#181928",paddingTop:"20px"}}>


                            <div class="col-md-7 col-lg-8">

                                <p class="text-center text-md-left">© 2021 Copyright:
          <a href="https://mdbootstrap.com/">
                                        <strong style={{color:"#ececec"}}> STUDYAbroad.com</strong>
                                    </a>
                                </p>

                            </div>

                            <div class="col-md-5 col-lg-4 ml-lg-0" >


                                <div class="text-center text-md-right">
                                    <ul class="list-unstyled list-inline">
                                        <li class="list-inline-item">
                                            <a class="btn-floating btn-sm rgba-white-slight mx-1 fb">
                                            <FontAwesomeIcon icon={faFacebookF} />
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="btn-floating btn-sm rgba-white-slight mx-1 tw">
                                            <FontAwesomeIcon icon={faTwitter}/>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="btn-floating btn-sm rgba-white-slight mx-1 gl">
                                            <FontAwesomeIcon icon={faGooglePlus}/> 
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="btn-floating btn-sm rgba-white-slight mx-1 lk">
                                            <FontAwesomeIcon icon={faLinkedin}/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                            </div>


                        </div>


                    </div>


                </footer>

            </div>
        </>
    )
}
export default Footer