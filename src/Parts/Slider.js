import '../Css/style.scss'
var Carousal1 = "3.jpg"
function Slider() {
    return (
        <>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={Carousal1} class="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Slider