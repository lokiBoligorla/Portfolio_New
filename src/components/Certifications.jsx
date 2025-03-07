import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "./Certifications.css";
import freecode from '../assets/Freecode_loki.pdf'
import PythonCertificate from "../assets/Python_Certificate.pdf";
import FrontendCertificate from "../assets/Frontend_Certificate.pdf";
import Internship from '../assets/Internship.pdf';
import Coursera from '../assets/Coursera.pdf';
import Udemy from '../assets/Udemy.pdf'
import TCSion from '../assets/TCSion.pdf'

const certificates = [
  {
       file:freecode,name:"Responsive Web Design"
  },
  { file: PythonCertificate, name: "Python Certificate" },
  { file: FrontendCertificate, name: "Frontend Certificate" },
  {file:Internship,name:"InternShip from CodeTech"},
  {file:Coursera,name:"Build a free Website with WordPress"},
  {file:Udemy,name:"Udemy"},
  {file:TCSion,name:"TCSion"}
];

const Certification = () => {
  return (
    <section className="certification-section">
      <h1 className="cert-title" style={{ marginTop: '80px' }}>My Certifications</h1>
      <h3 className="cert-subtitle">Showcasing my achievements in web development</h3>
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        spaceBetween={80} 
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 60 },
          768: { slidesPerView: 2, spaceBetween: 70 },
          1024: { slidesPerView: 3, spaceBetween: 80 },
        }}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 3000 }}
        className="cert-swiper"
      >
        {certificates.map((cert, index) => (
          <SwiperSlide key={index} className="cert-slide">
            <a href={cert.file} target="_blank" rel="noopener noreferrer" className="cert-card-link">
              <div className="cert-card"> 
                <iframe src={cert.file} title={cert.name} className="cert-pdf"></iframe>
                <p className="cert-text">{cert.name}</p>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Certification;
