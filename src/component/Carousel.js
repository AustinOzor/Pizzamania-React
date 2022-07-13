
 function Carousel() {
  return (
    <div className="container-fluid carousel-display">
      <div className="row">

        <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
          </ol>
        
          {/* // Wrapper for slides // */}
          <div className="carousel-inner  d-sm-block carousel-height" role="listbox">
            <div className="item active">
              <img src="images/pmain.jpg" alt="..."></img>
              <div className="carousel-caption">
                <h2>Why eat pizza?</h2>
              </div>
            </div>
            <div className="item">
              <img src="images/ivan-torres-MQUqbmszGGM-unsplash.jpg" alt="..."></img>
              
            </div>
            <div className="item">
              <img src="images/shourav-sheikh-a66sGfOnnqQ-unsplash.jpg" alt="..."></img>
             
            </div>
            <div className="item">
              <img src="images/p7.jpg" alt="..."></img>
             
            </div>
            
          </div>
        
       
          <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Carousel;