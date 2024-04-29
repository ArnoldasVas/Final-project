import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';

import './Footer.scss';

function Footer() {
  const {} = useContext(AppContext);
  return (
    <footer>
      <div className="footer">
        <h3>Contact us</h3>

        <p>
          Phone:+222222222 <br /> Email: hello@pirikup.com <br />
          Address: 32 Building state, New York, Us
        </p>
      </div>
    </footer>
  );
}

export default Footer;
