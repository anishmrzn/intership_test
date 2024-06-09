import "./contacts.css";
function Contact() {
  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Contact Us</h1>
        <p>
          If you have any further inquires, please let us know by <br /> filling
          the form below
        </p>
      </div>
      <div className="contact-form">
        <div className="name-container">
          <div className="input-form">
            <label>First name</label>
            <input className="name-input" type="text" />
          </div>
          <div className="input-form">
            <label>Last name</label>
            <input className="name-input" type="text" />
          </div>
        </div>
        <div className="input-form">
          <label>Email</label>
          <input className="email-input" type="email" />
        </div>
        <div className="input-form">
          <label>Message</label>
          <input className="message-input" type="text" />
        </div>
        <button className="submit">Submit</button>
      </div>
    </div>
  );
}
export default Contact;
