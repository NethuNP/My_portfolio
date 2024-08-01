import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='max-w-[1200px] sm:h-[150px] p-12 flex justify-between items-center mx-auto'>
      <span className='primary-color'>Nethmini Prabodha</span>
      <div className='flex space-x-4'>
        <a href='https://www.facebook.com/nethmini.praboda.54?mibextid=ZbWKwL' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faFacebook} className='text-pink-500 text-xl' />
        </a>
        <a href='https://x.com/0_prabodha_0?t=cVeZ3BYtwGKArYO3VW7RVw&s=09' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faTwitter} className='text-pink-500 text-xl' />
        </a>
        <a href='https://www.instagram.com/nethmini.praboda.54?igsh=YWRwNWpiMDUzbXE4' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faInstagram} className='text-pink-500 text-xl' />
        </a>

        <a href='https://www.linkedin.com/in/nethmini-prabodha-31819a310/' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faLinkedin} className='text-pink-500 text-xl' />
        </a>

        <a href='https://github.com/NethuNP' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faGithub} className='text-pink-500 text-xl' />
        </a>


      </div>

      <p className='primary-color'>nethminiprabodha3@gmail.com</p>
    </div>
  );
};

export default Footer;
