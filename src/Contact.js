import React from "react";
import "./CSS/Contact.css"

export default function Contact() {
    return (
        <div className="Con">
            <div className="form_main">
                <div className="form">
                    <h1>Contact Form</h1>
                    <br />
                    <form action="javascript:sendmail()" method="post">
                        <div className="field">
                            <label>Your Name:</label><br />
                            <input type="text" className="form-control" name="Name" id="Name" placeholder="" required="" /><br />
                        </div>
                        <div className="field">
                            <label>Your Email:</label><br />
                            <input type="email" className="form-control" name="Sender" id="Sender" placeholder="" required="" /><br />
                        </div>
                        <label>Message:</label><br />
                        <textarea name="Message" className="form-control" id="Message" placeholder="" required=""></textarea><br />
                        <div className="btnsub">
                            <button type="submit" className="btnsub btnsub-contact">Submit </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};
