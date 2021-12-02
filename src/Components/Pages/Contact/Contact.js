import { faEnvelope, faMapMarkedAlt, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import emailjs from 'emailjs-com';
import './Contact.css';
const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_7ff0j7m', 'my_portfolio', e.target, 'user_d6UB7RpQSTmAoLqZ1Mu3c')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
  

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
      <div className="container">
            <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
      </div>
    </div>
  );
};

export default Contact;
