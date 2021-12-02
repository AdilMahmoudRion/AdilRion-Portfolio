import React from "react";
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkedAlt, faPhoneVolume, faEnvelope } from '@fortawesome/free-solid-svg-icons'
const Contact = () => {
  return (
    <div className="contact-from">
      <div>
            <h2 className="header">INFORMATION</h2>
            <h1>CONTACT INFORMATION</h1>
            <p>
            Event definition is - somthing that happens occurre How evesnt
            sentence. Synonym when an unknown printer took a galley.
            </p>
            <h4>OFFICE IN <strong>DHAKA</strong></h4>
            <div className="address">
            <div className="address-detail"><p><FontAwesomeIcon icon={faMapMarkedAlt} /></p> <p>ADDRESS: Dhaka, Bangladesh</p></div>
            <div className="address-detail"><p><FontAwesomeIcon icon={faPhoneVolume} /></p><p>PHONE: +8801833449963</p></div>
            <div className="address-detail"><p><FontAwesomeIcon icon={faPhoneVolume} /></p><p>PHONE: +8801722234443</p></div>
            <div className="address-detail"><p><FontAwesomeIcon icon={faEnvelope} /></p><p>EMAIL: adilmahmoudrion@gmail.com</p></div>
            </div>
      </div>
      <div>

      </div>
    </div>
  );
};

export default Contact;
