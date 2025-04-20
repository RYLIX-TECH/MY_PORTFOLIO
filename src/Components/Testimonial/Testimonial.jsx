// Import necessary modules
import "./Testimonial.css"; // Import CSS file for styling
import { Data } from './Data'; // Import testimonial data
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required Swiper modules
import { Pagination } from 'swiper/modules';

// Define the Testimonial component
const Testimonial = () => {
  // Return the JSX for the component
  return (
    <section className="testimonial container section">
      <h2 className="section__title">My Clients Says</h2>
      <span className="section__subtitle">Testimonials</span>

      <Swiper className="testimonials__container"
        loop={true} // Enable infinite loop
        grabCursor={true} // Enable grabbing cursor
        spaceBetween={24} // Set space between slides
        pagination={{
          clickable: true, // Enable clickable pagination
        }}
        breakpoints={{
          620: {
            slidesPerView: 1, // Change number of slides per view for screens smaller than 620px
          },
          750: {
            slidesPerView: 2, // Change number of slides per view for screens larger than 750px
            spaceBetween: 50, // Increase space between slides for screens larger than 750px
          },
        }}
        modules={[Pagination]} // Enable pagination module
      >
        {Data.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide className='testimonial__card' key={id}>
              <div className="shine"></div>
              <img src={image} alt="" className='testimonial__img' />
              <h3 className="testimonial__name">{title}</h3>
              <p className="testimonial__description">{description}</p>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
};

// Export the Testimonial component
export default Testimonial;
