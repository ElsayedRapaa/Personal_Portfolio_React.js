import React from "react";
// File Css
import "./testimonials.css";
// Data Person Comments
import { data } from "./Data";
// import Swiper core and required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials_container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map((item) => (
          <SwiperSlide className="testimonail" key={item.id}>
            <div className="testimonail_img">
              <img src={item.img} alt={"Img Person" + item.id} />
            </div>
            <h5>{item.name}</h5>
            <p>{item.comment}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
