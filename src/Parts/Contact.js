import '../Css/style.scss'
function Contact() {
    return (
        <>
            <div className="contact" style={{ backgroundImage: "url('contact.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", height: "705px" }}>
                <h2>Get In Touch With Us</h2>
                <div className="row container-fluid">
                    <div className="col-md-6">
                        <h1>CANADIAN-MADE, <br></br>GLOBAL SUCCESS</h1>
                    </div>
                    <div className="col-md-6 contactee">
                        <form className="contact-form">
                            <div class="form-group">
                                <label>Full Name *</label>
                                <input type="text" class="form-control" placeholder="Enter Your Name" />
                            </div>
                            <div class="form-group">
                                <label>Contact Number *</label>
                                <input type="text" class="form-control" placeholder="Enter Your Contact Number"/>
                            </div>
                            <div class="form-group">
                                <label>Email *</label>
                                <input type="email" class="form-control" placeholder="Enter Your Email" />
                            </div>
                            <div class="form-group">
                                <label>Nationality *</label>
                                <select className="form-control">
                                    <option selected disabled>Nationality</option>
                                    <option>Indian</option>
                                    <option>Uk</option>
                                    <option>France</option>
                                    <option>Germany</option>
                                    <option>USA</option>
                                    <option>Canada</option>
                                    <option>Spain</option>
                                    <option>China</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>English Language Proficiency *</label>
                                <select className="form-control">
                                    <option selected disabled>English Language Proficiency</option>
                                    <option>Basic</option>
                                    <option>Elementory</option>
                                    <option>Intermideate</option>
                                    <option>Proficent</option>
                                    <option>Advance</option>
                                    <option>Native</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Program Applying For *</label>
                                <select className="form-control">
                                    <option selected disabled>Program Applying For</option>
                                    <option>Master,s</option>
                                    <option>Bachelor,s</option>
                                    <option>MBA</option>
                                    <option>Art's</option>
                                    <option>Language</option>
                                </select>
                            </div>
                            <button type="submit" class="btn btn-warning">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact