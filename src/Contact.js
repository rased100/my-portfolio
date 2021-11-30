import React from 'react';
import './Contact.css';
import contactImg from "./img/about-9.jpg"
function Contact() {
    return (
        <div className="p-5 contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Hire Me.</h1>
                            <p className="hire__text white">I am available for web development work. Connect with me via phone:</p>
                            <p className="hire__text white"><strong>+8801716-738-111</strong> or email <strong>rased100@gmail.com</strong></p>
                        </div>

                        {/* <div class="jotform-table-embed" style="width: 100%; height: 600px;" data-id="213334517106043" data-type="interactive"></div><script>(function(doc, id){let scripts=doc.getElementsByTagName("script")[0]; if (!doc.getElementById(id)){let script=doc.createElement("script"); script.async=1; script.id=id; script.src="https://cdn.jotfor.ms/common/tableEmbed.js"; scripts.parentNode.insertBefore(script, scripts);}})(document, "jotform-async");</script>
                        <script type="text/javascript" src="https://form.jotform.com/jsform/213334517106043"></script> */}
                        <div className="input__box">

                            <input type="text" className="contact name" placeholder="Your name *" />
                            <input type="text" className="contact email" placeholder="Your Email *" />
                            <input type="text" className="contact subject" placeholder="Write a Subject" />
                            <textarea name="message" id="message" placeholder="Write Your message"></textarea>
                            <button className="btn contact pointer" type="submit">Submit</button>
                        </div>
                    </div>
                </div>
                <div className="col__2">
                    <img src={contactImg} alt="" className="contact__img" />
                </div>
            </div>
        </div>
    )
}

export default Contact
