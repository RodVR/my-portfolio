import React, { useRef } from 'react'
import './contact.css'
import LinkedIn from '../../assets/linkedin.png'
import GitHub from '../../assets/github.png'
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
  const [formState, setFormState] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if(!formState.name || !formState.email || !formState.message) {
      alert('Please fill out all fields');
      return;
    }

    emailjs
      .sendForm('service_uowhugg', 'template_tt8p1m9', form.current, {
        publicKey: '2Uxjkax5BsFxJcJAD',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert("Email sent successfully!")
          setFormState({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section className="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out the form below to discuss any job opportunities.</span>
        <form action="" className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder='Your Name' name="name" value={formState.name} onChange={handleInputChange}/>
          <input type="email" className="email" placeholder='Your Email' name='email' value={formState.email} onChange={handleInputChange}/>
          <textarea className='msg' name="message" rows="5" placeholder='Your Message' value={formState.message} onChange={handleInputChange}></textarea>
          <button type='submit' value="Send" className="submitBtn">Submit</button>
          <div className="links">
            <a href='https://www.linkedin.com/in/rodolfovreis/' target='_blank' rel='noreferrer'>
              <img src={LinkedIn} alt="LinkedIn" className="link" />
            </a>
            <a href='https://github.com/RodVR' target='_blank' rel='noreferrer'>
            <img src={GitHub} alt="Gitub" className="link" />
            </a>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
