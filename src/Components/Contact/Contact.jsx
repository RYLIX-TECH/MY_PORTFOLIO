import './Contact.css';
import { motion } from 'motion/react';
import emailjs from 'emailjs-com';
import { useState } from 'react';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
  
    const { name, email, project } = formData;
  
    const templateParams = {
      from_name: name,             // from_name is the key for name in the template
      from_email: email,           // from_email is the key for email in the template
      project_description: project // project_description is the key for project in the template
    };
  
    // Send email using EmailJS 
    // console.log(formData); // Checking the form data in the console for debugging
  
    emailjs.send('service_3x622o2', 'template_mcmcixg', templateParams, 'A02LoOILweqDkxDS0')
      .then(() => {
        setSuccess(true);
        setFormData({ name: '', email: '', project: '' });
      })
      .catch((err) => {
        setError('Failed to send message. Please try again later.');
        console.error('Email sending failed', err);
      })
      .finally(() => setLoading(false));
  };
  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: "120", damping: "20", duration: 1, delay: 0.1 }}
              viewport={{once:true}}
            className="contact__info">
            <div className="contact__card">
              <i className="bx bx contact__card-icon"></i>
              <h3 className="contact__card-title"></h3>
              <span className="contact__card-data"></span>

              <a href="" className="contact__button">
                write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: "120", damping: "20", duration: 1, delay: 0.3 }}
                viewport={{once:true}}
              className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">fanyanyanwu@gmail.com</span>

              <a href="mailto:fanyanwu83@gmail.com" className="contact__button">
                write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: "120", damping: "20", duration: 1, delay: 0.5 }}
              viewport={{once:true}}

              className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>
              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">091-2739-1830</span>

              <a href="https://wa.me/2349127391830" className="contact__button">
                write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: "120", damping: "20", duration: 1, delay: 0.6 }}
              viewport={{once:true}}
              className="contact__card">
              <i className="bx bxl-messenger contact__card-icon"></i>
              <h3 className="contact__card-title">messenger</h3>
              <span className="contact__card-data">FlynDev</span>

              <a href="" className="contact__button">
                write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: "120", damping: "20", duration: 1, delay: 0.7 }}
          viewport={{once:true}}

          className="contact__content">
          <h3 className="contact__title">write to me your project</h3>
          <form onSubmit={handleSubmit} id="contactForm" className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="contact__form-input"
                placeholder="Insert Your Name"
                required
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="contact__form-input"
                placeholder="Insert Your Email"
                required
              />
            </div>
            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">project</label>
              <textarea
                name="project"
                value={formData.project}
                onChange={handleChange}
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Input Your Project"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="button button--flex"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'send message'}
              <i className="bx bxs-send"></i>
            </button>
          </form>
          {success && (
            <div className="success-message">Message sent successfully!
              <i className="bx bxs-success"></i>
            </div>
          )}
          {error && (
            <div className="error-message">{error}</div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;