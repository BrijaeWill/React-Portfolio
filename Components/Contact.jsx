import React, {useState}from 'react'
import Header from '/Components/header.jsx'

const Contact = () =>{
    //state for form data
const [formData, setFormData] = useState({
    name:"",
    email:"",
    message:"",
});
// state for form submission status
const [isSubmitted, setIsSubmitted] = useState(false);
 // handle input change
 const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
};
const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" }); 
  };
  return(
    <>
    <div id='contact' className='section'>
        <Header pageTitle="Contact Me" includeNav={false} showHeading={false}/>
    </div>
    <div className="contact-content">
    {isSubmitted && <p>Thank you for reaching out! Your message has been received.</p>}

    {/*Form */}
    <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-name">
        <label htmlfor="name">Name: </label>
        <input
        type="text"
        id="name"
        value={formData.name}
        onChange={handleChange}
        required
        placeholder="Enter your name"
        />
        </div>
        <div className="form-email">
            <label htmlFor="email">Email: </label>
            <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
            />
        </div>
        <div className="form-message">
            <label htmlFor="message">Message: </label>
            <textarea
            id="email"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Enter your message"
            />
            
        </div>
        <button type="submit" className="submit-btn">Submit</button>
    </form>
    </div>
    </>
  )


 }


export default Contact;