import React from 'react'
import Product from '../Products'

const Home = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" >
                      <img src="/assets/sliceone.png" alt="two"class=" mx-auto d-block  rounded position-relative"/>  
    </div>
                        <div class="carousel-item">
                            <img src="/assets/slice2.png" alt="two"class="mx-auto d-block rounded position-relative "/>
    </div>
                            <div class="carousel-item">
                                <img src="/assets/slice3.png"  alt="three" class="mx-auto d-block rounded position-relative "/>
    </div>
                            <div class="carousel-item">
                                <img src="/assets/slicefour.png"  alt="four" class="mx-auto d-block rounded position-relative"/>
    </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <Product/>
                    </div>
                    )
}

                    export default Home