import React, { useRef } from "react";
// File Css
import "./contact.css";
// React Icons
import { FiMail } from "react-icons/fi";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
// Email JS
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_2pyntuo",
      "template_eq5ip57",
      form.current,
      "-7hykxwcBxPhwhNty"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_by">
          <div className="contact_card">
            <FiMail className="contact_icon" />
            <h5>Email</h5>
            <small className="text-light">Elsayedrapaa7@gmail.com</small>
            <a href="mailto:elsayedrapaa7@gmail.com" target="_blank">
              Send a message
            </a>
          </div>
          <div className="contact_card">
            <RiMessengerLine className="contact_icon" />
            <h5>Messengar</h5>
            <small className="text-light">Elsayed Rapaa</small>
            <a href="http://m.me/elsayed.rapy.7" target="_blank">
              Send a message
            </a>
          </div>
          <div className="contact_card">
            <BsWhatsapp className="contact_icon" />
            <h5>WhatsApp</h5>
            <small className="text-light">+2 0127 135 6094</small>
            <a
              href="https://api.whatsapp.com/send?phone=+201271356094"
              target="_blank"
            >
              Send a message
            </a>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="7"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
