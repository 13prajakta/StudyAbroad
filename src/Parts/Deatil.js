import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faBook, faCog, faHeartbeat, faLaptopCode, faPaintBrush, faFlask, faGlobeEurope, faLanguage, faGavel, faNewspaper, faChalkboardTeacher, faConciergeBell, faTruck, faWifi, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import '../Css/style.scss'
function Detail() {
    return (
        <>
            <div className="detail-menue">
                <ul class="nav nav-pills mb-3 justify-content-center nav-fill" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">PROGRAMS</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">PROGRAMS LEVEL</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false" style={{ textTransform: "uppercase" }}>Study destinations similar to Canada</a>
                    </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <div className="row container">
                            <div className="col-md-4">
                                <FontAwesomeIcon icon={faPaintBrush} style={{ color: "#32a696", fontSize: "20px" }} />
                                <label className="label" for="ug"> &nbsp;&nbsp;Art & Design</label><br />
                            </div>
                            <div className="col-md-4">
                                <FontAwesomeIcon icon={faBriefcase} style={{ color: "#32a696", fontSize: "20px" }} />
                                <label className="label" for="pg"> &nbsp;&nbsp;Business</label><br />
                            </div>
                            <div className="col-md-4">
                                <FontAwesomeIcon icon={faLaptopCode} style={{ color: "#32a696", fontSize: "20px" }} />
                                <label className="label" for="mba"> &nbsp;&nbsp;Computer Science</label><br />
                            </div>
                        </div>
                        <div className="row container">
                            <div className="col-md-4">
                                <FontAwesomeIcon icon={faCog} style={{ color: "#32a696", fontSize: "20px" }} />
                                <label className="label" for="dr"> &nbsp;&nbsp;Engineering</label><br />
                            </div>
                            <div className="col-md-4">
                                <FontAwesomeIcon icon={faBook} style={{ color: "#32a696", fontSize: "20px" }} />
                                <label className="label" for="dip"> &nbsp;&nbsp;General Studies</label><br />
                            </div>
                            <div className="col-md-4">
                                <FontAwesomeIcon icon={faHeartbeat} style={{ color: "#32a696", fontSize: "20px" }} />
                                <label className="label" for="dip"> &nbsp;&nbsp;Medicine & Health</label><br />
                            </div>
                        </div>
                        <div className="row container">
                            <div className="col-md-4">
                                <FontAwesomeIcon icon={faGlobeEurope} style={{ color: "#32a696", fontSize: "20px" }} />
                                <label className="label" for="ug"> &nbsp;&nbsp;Humanities</label><br />
                            </div>
                            <div className="col-md-4">
                                <FontAwesomeIcon icon={faLanguage} style={{ color: "#32a696", fontSize: "20px" }} />
                                <label className="label" for="pg"> &nbsp;&nbsp;Languages</label><br />
                            </div>
                            <div className="col-md-4">
                                <FontAwesomeIcon icon={faGavel} style={{ color: "#32a696", fontSize: "20px" }} />
                                <label className="label" for="mba"> &nbsp;&nbsp;Law</label><br />
                            </div>
                        </div>
                        <div className="row container">
                            <div className="col-md-4">
                                <FontAwesomeIcon icon={faChalkboardTeacher} style={{ color: "#32a696", fontSize: "20px" }} />
                                <label className="label" for="dr"> &nbsp;&nbsp;Teaching</label><br />
                            </div>
                            <div className="col-md-4">
                                <FontAwesomeIcon icon={faNewspaper} style={{ color: "#32a696", fontSize: "20px" }} />
                                <label className="label" for="dip"> &nbsp;&nbsp;Media</label><br />
                            </div>
                            <div className="col-md-4">
                                <FontAwesomeIcon icon={faFlask} style={{ color: "#32a696", fontSize: "20px" }} />
                                <label className="label" for="dip"> &nbsp;&nbsp;Science</label><br />
                            </div>
                        </div>
                        <div className="row container">
                            <div className="col-md-4">
                                <FontAwesomeIcon icon={faConciergeBell} style={{ color: "#32a696", fontSize: "20px" }} />
                                <label className="label" for="dr"> &nbsp;&nbsp;Tourism & Hospitality</label><br />
                            </div>
                            <div className="col-md-4">
                                <FontAwesomeIcon icon={faTruck} style={{ color: "#32a696", fontSize: "20px" }} />
                                <label className="label" for="dip"> &nbsp;&nbsp;Transport & Logistics</label><br />
                            </div>
                            <div className="col-md-4">
                                <FontAwesomeIcon icon={faWifi} style={{ color: "#32a696", fontSize: "20px" }} />
                                <label className="label" for="dip"> &nbsp;&nbsp;Online programs</label><br />
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <div className="row container">
                            <div className="col-md-4">
                                <FontAwesomeIcon icon={faPlusCircle} style={{ color: "#32a696", fontSize: "20px" }} />
                                <label className="label" for="ug"> &nbsp;&nbsp;Bachelor's degree</label><br />
                            </div>
                            <div className="col-md-4">
                                <FontAwesomeIcon icon={faPlusCircle} style={{ color: "#32a696", fontSize: "20px" }} />
                                <label className="label" for="pg"> &nbsp;&nbsp;Master's degree</label><br />
                            </div>
                            <div className="col-md-4">
                                <FontAwesomeIcon icon={faPlusCircle} style={{ color: "#32a696", fontSize: "20px" }} />
                                <label className="label" for="mba"> &nbsp;&nbsp;MBA</label><br />
                            </div>
                        </div>
                        <div className="row container">
                            <div className="col-md-4">
                                <FontAwesomeIcon icon={faPlusCircle} style={{ color: "#32a696", fontSize: "20px" }} />
                                <label className="label" for="dr"> &nbsp;&nbsp;Doctorate / PhD</label><br />
                            </div>
                            <div className="col-md-4">
                                <FontAwesomeIcon icon={faPlusCircle} style={{ color: "#32a696", fontSize: "20px" }} />
                                <label className="label" for="dip"> &nbsp;&nbsp;Graduate diploma / certificate</label><br />
                            </div>
                            <div className="col-md-4">
                                <FontAwesomeIcon icon={faPlusCircle} style={{ color: "#32a696", fontSize: "20px" }} />
                                <label className="label" for="dip"> &nbsp;&nbsp;Diploma / certificate</label><br />
                            </div>
                        </div>
                        <div className="row container">
                            <div className="col-md-4">
                                <FontAwesomeIcon icon={faPlusCircle} style={{ color: "#32a696", fontSize: "20px" }} />
                                <label className="label" for="dr"> &nbsp;&nbsp;Summer / Short courseD</label><br />
                            </div>
                            <div className="col-md-4">
                                <FontAwesomeIcon icon={faPlusCircle} style={{ color: "#32a696", fontSize: "20px" }} />
                                <label className="label" for="dip"> &nbsp;&nbsp;Foundation program</label><br />
                            </div>
                            <div className="col-md-4">
                                <FontAwesomeIcon icon={faPlusCircle} style={{ color: "#32a696", fontSize: "20px" }} />
                                <label className="label" for="dip"> &nbsp;&nbsp;Associate's degree</label><br />
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                        <div className="row container">
                            <div className="col-md-3">
                                <div class="media">
                                    <img src="usa.jpeg" class="mr-3" alt="..." />
                                    <a>Study In USA</a>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div class="media">
                                    <img src="uk.jpg" class="mr-3" alt="..." />
                                    <a>Study In UK</a>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div class="media">
                                    <img src="aus.png" class="mr-3" alt="..." />
                                    <a>Study In Australia</a>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div class="media">
                                    <img src="german.png" class="mr-3" alt="..." />
                                    <a>Study In Germany</a>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Detail