import React from "react";

function Testimonials() {
  return (
    <div>
      <h3 className="text-center mt-4">Testimonials</h3>
      <div className="red-line-short mb-2 mt-2"></div>
      <div
        id="carouselExampleCaptions"
        class="carousel slide h-75"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="carousel-caption d-flex justify-content-center">
              <img
                className="first-img-testimonials"
                src="images/happy-people-1.jpg"
                alt=""
              />
              <p className="text-dark tstmn-align text-right">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda atque ut magnam esse et blanditiis laboriosam. Nemo,
                possimus dolor quidem voluptas animi esse labore rerum
                consequatur earum impedit laboriosam voluptates. Provident vero
                optio, maiores porro consequatur quo officia quis praesentium
                sit ex, impedit doloremque illo suscipit voluptatem ut eligendi
                harum obcaecati dolore iusto! Laboriosam dolores molestiae iste
                magnam soluta rerum? Modi in excepturi quo.
                <br />-<span className="red-text">Anita Bella</span>
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <div class="carousel-caption d-flex justify-content-center">
              <img
                className="first-img-testimonials"
                src="images/happy-people-1.jpg"
                alt=""
              />
              <p className="text-dark tstmn-align text-right">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda atque ut magnam esse et blanditiis laboriosam. Nemo,
                possimus dolor quidem voluptas animi esse labore rerum
                consequatur earum impedit laboriosam voluptates. Provident vero
                optio, maiores porro consequatur quo officia quis praesentium
                sit ex, impedit doloremque illo suscipit voluptatem ut eligendi
                harum obcaecati dolore iusto! Laboriosam dolores molestiae iste
                magnam soluta rerum? Modi in excepturi quo.
                <br />-<span className="red-text">Andiong Moses</span>
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <div class="carousel-caption d-flex justify-content-center">
              <img
                className="first-img-testimonials"
                src="images/happy-people-1.jpg"
                alt=""
              />
              <p className="text-dark tstmn-align text-right">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda atque ut magnam esse et blanditiis laboriosam. Nemo,
                possimus dolor quidem voluptas animi esse labore rerum
                consequatur earum impedit laboriosam voluptates. Provident vero
                optio, maiores porro consequatur quo officia quis praesentium
                sit ex, impedit doloremque illo suscipit voluptatem ut eligendi
                harum obcaecati dolore iusto! Laboriosam dolores molestiae iste
                magnam soluta rerum? Modi in excepturi quo.
                <br />-<span className="red-text">Tega Emuobo</span>
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Testimonials;
