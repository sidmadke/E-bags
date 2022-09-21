import React from "react";
import "./CSS/Contact.css"

export default function Contact() {
    return (
        <div className="Con">
            <div class="form_main">
                <div class="form">
                    <h1>Contact Form</h1>
                    <br />
                    <form action="javascript:sendmail()" method="post">
                        <div class="field">
                            <label>Your Name:</label><br />
                            <input type="text" class="form-control" name="Name" id="Name" placeholder="" required="" /><br />
                        </div>
                        <div class="field">
                            <label>Your Email:</label><br />
                            <input type="email" class="form-control" name="Sender" id="Sender" placeholder="" required="" /><br />
                        </div>

                        <label>Message:</label><br />
                        <textarea name="Message" class="form-control" id="Message" placeholder="" required=""></textarea><br />
                        <div class="btnsub">
                            <button type="submit" class="btnsub btnsub-contact">Submit </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

};
