import '../Css/style.scss'
import $ from 'jquery';
function About_slider()
{
    
    return(
        <section id="testimonial" class="bg-primary">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2>Students Testimonial</h2>
                </div>
                <div class="col-12">
                    <div id="testimonialCarousel" class="carousel slide" data-ride="carousel">
                       
                        <ol class="carousel-indicators">
                            <li data-target="#testimonialCarousel" data-slide-to="0" class="active"></li>
                            <li data-target="#testimonialCarousel" data-slide-to="1"></li>
                            <li data-target="#testimonialCarousel" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner" role="listbox">
                            </div>
                            <div class="carousel-item active">
                                <div class="carousel-content">
                                    <div class="client-img"><img src="user1.jpeg" alt="Testimonial Slider"/></div>
                                    <h3>Rajnish Kumar <br/><span>India</span></h3>
                                    <p class="col-md-8 offset-md-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.</p>
                                </div>
                            </div>
                            
                            <div class="carousel-item">
                                <div class="carousel-content">
                                    <div class="client-img"><img src="user3.jpeg" alt="Testimonial Slider"/></div>
                                    <h3>Priya Jha <br/><span>India</span></h3>
                                    <p class="col-md-8 offset-md-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.</p>
                                </div>
                            </div>
                            
                            <div class="carousel-item">
                                <div class="carousel-content">
                                    <div class="client-img"><img src="user4.jpg" alt="Testimonial Slider"/></div>
                                    <h3>Avnish Bore <br/><span>India</span></h3>
                                    <p class="col-md-8 offset-md-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.</p>
                                </div>
                            </div>
                            
                            <a class="carousel-control-prev text-white" href="#testimonialCarousel" role="button" data-slide="prev">
                            <i class="fas fa-chevron-left"></i>
                            </a>
                            <a class="carousel-control-next text-white" href="#testimonialCarousel" role="button" data-slide="next">
                            <i class="fas fa-chevron-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    )
}
export default About_slider