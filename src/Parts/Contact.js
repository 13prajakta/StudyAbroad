import '../Css/style.scss'
import {useState} from 'react'
import { validate } from '../util/validation.js';
import axios from 'axios'
function Contact() {
    let [errors, setErrors] = useState({})
    let [user, setUser] = useState({})
    let [msg, setMsg] = useState()
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
                nationality: fields.nationality.value,
                language: fields.language.value,
                program: fields.program.value
            }
            setUser(user)
            setErrors(" ")
            let apiurl ="http://127.0.0.1:8000/api/getintouch"
            axios({
                url: apiurl,
                method:"POST",
                data: user
            }).then((response) => {
                setMsg(response.data.message);
            }, (error) => {
                console.log("error from getintouch api", error)
            },[user])

        
        }
    }
    return (
        <>
            <div className="contact" style={{ backgroundImage: "url('contact.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", height: "855px" }}>
                <h2>Get In Touch With Us</h2><br></br>
                {msg=="You Getintouch With us successfully."?<span className="text-sucess font-weight-bold bg-warning">Thank You For get In Touch With Us ! We Will Contact You Shortly..</span>:null}
                <div className="row container-fluid">
                    <div className="col-md-6">
                        <h1>CANADIAN-MADE, <br></br>GLOBAL SUCCESS</h1>
                    </div>
                    <div className="col-md-6 contactee">
                        <form className="contact-form" onSubmit={onSubmit}>
                            <div className="form-group">
                                <label>Full Name *</label>
                                <input type="text" name="name" className="form-control" placeholder="Enter Your Name" />
                                {errors.name ? <span className="text-danger font-weight-bold">{errors.name}</span> : null}
                            </div>
                            
                            <div className="form-group">
                                <label>Contact Number *</label>
                                <input type="text" name="mobile" className="form-control" placeholder="Enter Your Contact Number"/>
                                {errors.mobile ? <span className="text-danger font-weight-bold">{errors.mobile}</span> : null}
                            </div>
                            
                            <div className="form-group">
                                <label>Email *</label>
                                <input type="email" name="email" className="form-control" placeholder="Enter Your Email" />
                                {errors.email ? <span className="text-danger font-weight-bold">{errors.email}</span> : null}
                            </div>
                            
                            <div className="form-group">
                                <label>Nationality *</label>
                                <select className="form-control" value={user.nationality} name="nationality">
                                    <option value=" ">Nationality</option>
                                    <option value="Indian">Indian</option>
                                    <option value="Uk">Uk</option>
                                    <option value="France">France</option>
                                    <option value="Germany">Germany</option>
                                    <option value="USA">USA</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Spain">Spain</option>
                                    <option value="China">China</option>
                                </select>
                                {errors.nationality ? <span className="text-danger font-weight-bold">{errors.nationality}</span> : null}
                            </div>
                            
                            <div className="form-group">
                                <label>English Language Proficiency *</label>
                                <select className="form-control" value={user.language} name="language">
                                    <option value=" ">English Language Proficiency</option>
                                    <option value="Basic">Basic</option>
                                    <option value="Elementory">Elementory</option>
                                    <option value="Intermideate">Intermideate</option>
                                    <option value="Proficent">Proficent</option>
                                    <option value="Advance">Advance</option>
                                    <option value="Native">Native</option>
                                </select>
                                {errors.language ? <span className="text-danger font-weight-bold">{errors.language}</span> : null}
                            </div>
                            
                            <div className="form-group">
                                <label>Program Applying For *</label>
                                <select className="form-control" value={user.program} name="program">
                                    <option value=" ">Program Applying For</option>
                                    <option value="Master">Master,s</option>
                                    <option value="">Bachelor,s</option>
                                    <option value="Bachelor">MBA</option>
                                    <option value="Art">Art's</option>
                                    <option value="Language">Language</option>
                                </select>
                                {errors.program ? <span className="text-danger font-weight-bold">{errors.program}</span> : null}
                            </div>
                            
                            <button type="submit" className="btn btn-warning">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact