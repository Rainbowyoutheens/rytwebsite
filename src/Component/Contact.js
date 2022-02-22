import React from 'react';
import Navbar from './Subcomponents/Navbar';
import Footer from './Subcomponents/Footer';

function Contact() {
  return <div>
    <Navbar />
    <div className="container-fluid d-flex align-items-center justify-content-center grey-col segoe-ui just-space pt-2 pb-2">
      <div className="m-5">
        <h3>Contact Us</h3>
        <p><a className="link-col" href="tel:+2347068079491">+234-706-807-9491<br /></a>
        <a className="link-col" href="tel:+2349090853499">+234-909-085-3499<br /></a>
        rainbowyoutheens@gmail.com</p>
        <div className="red-line-contact mb-3 mt-4"></div>
        <h3>Address Info:</h3>
        <p>GB Estate, Nkpolu, Rumuigbo, Port Harcourt, Nigeria.<br />
        </p>
        
      </div>
      <div className="m-5">
        <form action="">
          <input className="mt-3 border-0 px-2 py-2 me-3 rounded-3 shadow name-width" placeholder="first name" /> 
          <input className="mt-3 border-0 px-2 py-2 rounded-3 shadow name-width" placeholder="last name" /> <br />
          <input className="mt-3 border-0 px-2 py-2 rounded-3 shadow add-length" placeholder="Email Address" type="email"/> <br />
          <input className="mt-3 border-0 px-2 py-2 rounded-3 shadow add-length" placeholder="Subject" /> <br />
          <textarea className="mt-3 border-0 px-2 rounded-3 py-1 p shadow add-length" placeholder="Message" /> <br />
          <button className="mt-3 border-0 px-2 rounded-3 shadow py-2 yel-col add-length" type="submit">Submit</button>
        </form>
      </div>
    </div>
    <Footer />
  </div>;
}

export default Contact;
