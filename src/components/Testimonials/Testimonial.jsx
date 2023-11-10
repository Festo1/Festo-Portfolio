import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "I can't say enough good things about working with Festo. He not only delivered an amazing product, but made the entire process smooth and enjoyable. I would highly recommend his services!",
    },
    {
      img: profilePic2,
      review:
        "Festo is a true professional. He listened carefully to what I wanted and provided creative solutions that exceeded my expectations. I'm thrilled with the final results and enjoyed collaborating with such a talented individual.",
    },
    {
      img: profilePic3,
      review:
        "Festo brought my vision to life in a way I didn't think was possible. His skill and expertise is truly impressive. I would enthusiastically recommend him to anyone looking for top quality work and service.",
    },
    {
      img: profilePic4,
      review:
        "I can't believe how lucky I was to find Festo! Not only did he flawlessly execute exactly what I asked for, he also provided guidance and suggestions that elevated the project beyond my expectations. An absolutely amazing talent!",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
