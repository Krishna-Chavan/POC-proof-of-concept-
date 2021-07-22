import React from 'react'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './SlidingHomes.css'
import image1 from '../Images/image1.jpg'
import image2 from '../Images/image2.jpg'
import image3 from '../Images/image3.jpg'
import image4 from '../Images/image4.jpg'
import image5 from '../Images/image5.jpg'
import image6 from '../Images/image5.jpg'
import image7 from '../Images/image5.jpg'
import image8 from '../Images/image5.jpg'

export default function SlidHomes() {

    return (
        <div className="div-12">
            <hr />
            {/* <div>
            <span className="img-im">
                <Carousel>
                    <Carousel.Item>
                        <img src={image1} alt="image1" height="650px" width="100%" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={image2} alt="image1" height="550px" width="100%" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={image3} alt="image1" height="550px" width="100%" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={image4} alt="image1" height="550px" width="100%" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={image5} alt="image1" height="550px" width="100%" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={image6} alt="image1" height="550px" width="100%" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={image7} alt="image1" height="550px" width="100%" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={image8} alt="image1" height="550px" width="100%" />
                    </Carousel.Item>
                </Carousel>
            </span>
            <span className="sp">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia repellendus, distinctio laboriosam dolore sapiente, delectus blanditiis enim fugiat quae maxime asperiores culpa tempore minus voluptate impedit! Eos assumenda cupiditate nisi?
              Perferendis dolorum doloremque aliquid mollitia libero tenetur illum quae consequatur quidem deserunt maxime repellat quasi error velit dolor rerum beatae reiciendis, inventore, culpa voluptatibus et nihil explicabo. Accusamus, labore ullam!
              Delectus dolores sed earum exercitationem dignissimos tenetur ea impedit id quibusdam cumque consectetur perspiciatis fugit ut optio nesciunt totam amet corrupti eos atque fugiat dolor ullam, animi reprehenderit. Laudantium, veritatis?
              Dolorem, eaque alias ducimus voluptas odio mollitia? Temporibus quo quia ab dolores ad aspernatur explicabo obcaecati, soluta beatae earum recusandae ratione est, laboriosam maiores iusto ipsa in illum nisi reiciendis!
              Omnis, tempora dolore fuga architecto maiores dolorem minus aspernatur voluptate cupiditate perferendis vel laudantium officia possimus praesentium amet quasi, illum soluta inventore. Consequuntur, deleniti mollitia dolorem iusto a perspiciatis provident.
            </span>
            </div> */}
            <div class="card mb-3 " style={{maxWidth: '1135px'}}>
                <div class="row g-0 ">
                    <div class="col-md-8">
                    <Carousel>
                    <Carousel.Item>
                        <img src={image1} alt="image1" height="650px" width="100%" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={image2} alt="image1" height="550px" width="100%" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={image3} alt="image1" height="550px" width="100%" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={image4} alt="image1" height="550px" width="100%" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={image5} alt="image1" height="550px" width="100%" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={image6} alt="image1" height="550px" width="100%" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={image7} alt="image1" height="550px" width="100%" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={image8} alt="image1" height="550px" width="100%" />
                    </Carousel.Item>
                </Carousel>
                    </div>
                    <div class="col-md-4">
                        <div class="card-body">
                            <h3 class="card-title">Schedule a Tour</h3>
                            <p class="card-text">choose a prefer day</p>
                            <p class="card-text"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
