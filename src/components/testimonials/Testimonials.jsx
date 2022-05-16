import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from cleints</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials__container">
        <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{clickable:true}}>
          <SwiperSlide>
            <article className="testimonial">
              <div className="client__avatar">
                <img src={AVTR1} alt="" />
              </div>
              <h5 className="client__name">Ernest Achiever</h5>
              <small className="client__review">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                hendrerit non mauris sit amet blandit. Aenean eu nisi viverra,
                pharetra ipsum ac, facilisis leo. Suspendisse potenti.
              </small>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="testimonial">
              <div className="client__avatar">
                <img src={AVTR2} alt="" />
              </div>
              <h5 className="client__name">Ernest Achiever</h5>
              <small className="client__review">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                hendrerit non mauris sit amet blandit. Aenean eu nisi viverra,
                pharetra ipsum ac, facilisis leo. Suspendisse potenti.
              </small>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="testimonial">
              <div className="client__avatar">
                <img src={AVTR3} alt="" />
              </div>
              <h5 className="client__name">Ernest Achiever</h5>
              <small className="client__review">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                hendrerit non mauris sit amet blandit. Aenean eu nisi viverra,
                pharetra ipsum ac, facilisis leo. Suspendisse potenti.
              </small>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="testimonial">
              <div className="client__avatar">
                <img src={AVTR4} alt="" />
              </div>
              <h5 className="client__name">Ernest Achiever</h5>
              <small className="client__review">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                hendrerit non mauris sit amet blandit. Aenean eu nisi viverra,
                pharetra ipsum ac, facilisis leo. Suspendisse potenti.
              </small>
            </article>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
