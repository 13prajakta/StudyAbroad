import '../Css/style.scss'
import {Link} from 'react-router-dom'
function Shortabout() {
    return (
        <>
            <div className="shortabout">
                <h2>Your first stop on your journey to study abroad</h2>
                <div className="row">
                    <div className="col-md-6">
                    <p> we truly believe that students who study abroad become the next generation of globally-minded adventurers and leaders - and we want more of you to do it!
<br></br>Every year, our search engine helps over three million students find, compare, and connect with some of the best universities and schools around the world.</p>
                    <br></br> <br></br>
                    <Link to="/about"><button className="btn btn-lg btn-warning">Learn More About Us</button></Link>
                    </div>
                    <div className="col-md-6">
                        <img src="brand.png"></img>
                    </div>
                </div>
                
            </div>
        </>
    )
}
export default Shortabout