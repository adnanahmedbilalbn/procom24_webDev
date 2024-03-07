import React from 'react';
import { Button } from 'react-bootstrap';
import { CiWallet } from "react-icons/ci";
import { FaInbox } from 'react-icons/fa';
import { CiTwitter } from "react-icons/ci";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
          <div className='flex text-violet-700		text-base'> <CiWallet className='text-2xl		'/> PayHabib</div>
          </div>
          <div className="col-md-2">
            <h5>Products</h5>
            <ul>
              <li>Services</li>
              <li>Solutions</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5>Resources</h5>
            <ul>
              <li>Blog</li>
              <li>User guides</li>
              <li>Webinars</li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5>Company</h5>
            <ul>
              <li>About</li>
              <li>Join us</li>
            </ul>
          </div>
          <div className="col-md-3 flex flex-col gap-4">
            <h5 className='text-violet-700	font-bold	'>Subscribe to our Newsletter</h5>
            <p className='w-max	'>For product announces and exclusive insights</p>
            <div className="newsletter-form">
            <div className="input-group">
                <div className="input-group-text"><FaInbox /></div>
                <input type="email" className="form-control" placeholder="Your email" />
              </div>
              <button className='bg-violet-950 rounded	'>Subscribe</button>
            </div>
          </div>
        </div>

       <div className='flex justify-between mt-5'>
        <div>
           <button> English </button>
         </div>
         <div>
           @ 2022 Brand,Inc, .Privacy .Terms.Sitemap
         </div>
         <div className='flex social-icons'>
         <CiTwitter />
         <FaFacebookSquare />
         <FaLinkedin />
         <FaYoutube />


         </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
