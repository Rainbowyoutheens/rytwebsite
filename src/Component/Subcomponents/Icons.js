import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faLinkedin, faGithub, faInstagram} from '@fortawesome/fontawesome-free-brands';

function Icons() {
  return (
    <div>
        <div id="icons">
          <Link to=''>
            <FontAwesomeIcon className ='font-awesome' icon={faGithub} />
          </Link>
          <Link to=''>
            <FontAwesomeIcon className ='font-awesome' icon={faFacebook} />
          </Link>
          <Link to=''>
            <FontAwesomeIcon className ='font-awesome' icon={faLinkedin} />
          </Link>
          <Link to=''>
            <FontAwesomeIcon className ='font-awesome' icon={faInstagram} />
          </Link>
        </div>
    </div>
  )
}

export default Icons
