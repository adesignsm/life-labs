import React from "react";
import "./index.css";

import { Form, Input, TextArea, Button } from "semantic-ui-react";

const SERVICE_ID = "service_0segoxi";
const TEMPLATE_ID = "template_mhea5zf";
const USER_ID = "_4kt98Jj-6hp6cWoO";

const Contact = () => {
    const handleOnSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then((result) => {
            if (result.text === "OK") {
                document.querySelector(".submit-button").innerHTML = "Message sent. Thank you";
            } else {
                document.querySelector(".submit-button").innerHTML = "Sorry. Your message was not sent";
            }
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
    }
    return (
        <>
            <div className="contact-form-container" style={{display: "none"}}>
                <Form className="contact-content" onSubmit={(e) => handleOnSubmit(e)}>
                    <h1>Hit us up!</h1>
                    <Form.Field control={Input} name='user_name' placeholder='Nickname or full name *' required />
                    <Form.Field control={Input} name='user_email' placeholder='Email *' required/>
                    <Form.Field control={TextArea} name='user_message' placeholder='What you want to inquire about *' required/>
                    <Button className="submit-button" type='submit'>Submit</Button>
                </Form>
            </div>
        </>
    )
}

export default Contact;