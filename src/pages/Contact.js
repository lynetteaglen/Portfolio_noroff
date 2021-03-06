import React, { useState } from 'react';

export default function Contact() {

    const [firstnameError, setFirstnameError] = useState(true);
    const [lastnameError, setLastnameError] = useState(true);
    const [emailError, setEmailError] = useState(true);
    const [messageError, setMessageError] = useState(true);

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const handleChange = (input) => {
        let name = input.target.name;
        let value = input.target.value;
        let emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/

        switch (name) {
            case 'firstname':
                (value !== '') ? setFirstnameError(false) : setFirstnameError(true)
                break;
            case 'lastname':
                (value !== '') ? setLastnameError(false) : setLastnameError(true)
                break;
            case 'email':
                (emailPattern.test(value)) ? setEmailError(false) : setEmailError(true)
                break;
            case 'message':
                (value !== '') ? setMessageError(false) : setEmailError(true)
                break;

            default:
        }
    }

    return (
        <>
            <h1 className="contact__header">Have any questions or requests?</h1>

            <div className="contact__container">
                <div className="contact__information">
                    <form onSubmit={handleSubmit}>
                        <p>Firstname</p>
                        <input type='text'
                            name='firstname'
                            onChange={handleChange}
                            className="form-control"
                        />
                        <p className={(firstnameError) ? 'error' : 'error__hide'}>Please enter your firstname*</p>
                        <br />

                        <p>Lastname</p>
                        <input type='text'
                            name='lastname'
                            onChange={handleChange}
                            className="form-control"
                        />
                        <p className={(lastnameError) ? 'error' : 'error__hide'}>Please enter your lastname*</p>
                        <br />

                        <p>Email</p>
                        <input type='text'
                            name='email'
                            onChange={handleChange}
                            className="form-control"
                        />
                        <p className={(emailError) ? 'error' : 'error__hide'}>Please enter your email*</p>
                        <br />
                    </form>
                </div>


                <div className="contact__messagebox">
                    <p>Message</p>
                    <textarea type='text'
                        name='message'
                        onChange={handleChange}
                        className="form-control message-form"
                    />
                    <p className={(messageError) ? 'error' : 'error__hide'}>Please enter a message*</p>
                    <br />
                    <input type="submit" value="send" disabled={firstnameError || lastnameError || emailError || messageError} className="contact__button" />


                </div>

            </div>
        </>
    )
}