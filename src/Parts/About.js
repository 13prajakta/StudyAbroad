import '../Css/style.scss'
import About_slider from './About_slider.js'
function About()
{
    return (
        <>
            <div className="row container-fluid about">
                <div className="col-md-7">
                <div class="jumbotron" style={{backgroundImage:"url('student.jpg')",backgroundRepeat:"no-repeat",backgroundSize:"100% 100%" ,height:"500px"}}>
                </div>
                </div>
                <div className="col-md-5">
                    <h1>About Study Abroad</h1>
                    <div className="pink">
                        <h3>We believe studying abroad is <br></br>life-changing!</h3>
                        <p>We know how life-changing studying abroad is - most of us here at educations.com have done it ourselves! It's an adventure of a lifetime. An opportunity to immerse yourself in a transformative new culture . An introduction to lifelong friendships and adventurous experiences. A chance to discover yourself, your passions, and your place in the world.<br></br> We also know how overwhelming the possibilities are and how difficult it can be to find all the information you need in order to take the leap. <br></br>So let's take that leap. Together.</p>
                    </div>
                </div>
            </div>
            <About_slider />
        </>
    )
}
export default About