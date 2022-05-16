import React from "react";
import "./testimonials.css";
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from cleints</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVATR1} alt="" />
            <h5 className="client__name">Ernest Achiever</h5>
            <small className="client__review">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nulla hendrerit non mauris sit amet blandit. Aenean eu nisi viverra, pharetra ipsum ac, facilisis leo. 
            Suspendisse potenti.
            </small>
          </div>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVATR2} alt="" />
            <h5 className="client__name">Ernest Achiever</h5>
            <small className="client__review">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nulla hendrerit non mauris sit amet blandit. Aenean eu nisi viverra, pharetra ipsum ac, facilisis leo. 
            Suspendisse potenti.
            </small>
          </div>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVATR3} alt="" />
            <h5 className="client__name">Ernest Achiever</h5>
            <small className="client__review">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nulla hendrerit non mauris sit amet blandit. Aenean eu nisi viverra, pharetra ipsum ac, facilisis leo. 
            Suspendisse potenti.
            </small>
          </div>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVATR4} alt="" />
            <h5 className="client__name">Ernest Achiever</h5>
            <small className="client__review">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nulla hendrerit non mauris sit amet blandit. Aenean eu nisi viverra, pharetra ipsum ac, facilisis leo. 
            Suspendisse potenti.
            </small>
          </div>
        </article>
      </div>
    </section>
    );
};

export default Testimonials;
