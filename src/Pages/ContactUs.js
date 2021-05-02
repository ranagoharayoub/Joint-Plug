import React from 'react'
import './ContactUs.css'


function ContactUs() {
    return (
        <div className="main-div1">
            <div className="heading-3"><h1 className="heading4">Contact Us</h1></div>
            <div className='cu-bg'>
            <form className="contactus" action="/contactme">
                 <label for="name"className="name5-" required>Name</label>
                    <input className="namebox5-" type="text" id="name" name="name" placeholder="Enter Your Name"></input>
                    <label for="company"className="company5">Company</label>
                    <input className="companybox5" type="text" placeholder="Enter Company Name" id="company" name="company"></input><br></br>
                    <label for="phonenumber"className="phonenumber5">Phone #</label>
                    <input className="phonebox5" type="text" placeholder="Enter Phone Number" id="phonenumber" name="phonenumber"></input>
                    <label for="email"className="email5">E-mail #</label>
                    <input className="emailbox5" type="email" placeholder="Enter E-mail" id="email" name="email"></input><br></br>
                    <label className="department">Department</label>
                    <select className="optionbox">
                    <option value="General Queries">Select</option>
                    <option value="General Queries">General Enquiries</option>
                    <option value="General Queries">Customer Service</option>
                    <option value="General Queries">Advertising</option>
                    <option value="General Queries">Billing</option>
                    <option value="General Queries">Legal</option>
                </select><br></br>
                    <label for="message"className="message" required>Message</label><br></br>
                    <textarea className="messagebox" cols="50" rows="50" type="text" id="message" name="message" placeholder="Type your message here"></textarea><br></br>
                <button className="register-btn">Send Message</button>
            </form>
            </div>
        </div>
    )
}

export default ContactUs
