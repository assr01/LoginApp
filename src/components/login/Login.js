import React, { useEffect, useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formValid, setFormValid] = useState(false);
    const [emailValid, setEmailValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);
    const myBody = {email: email, pass: password};
    useEffect(() => {
        const identifier = setTimeout(() => {
            setFormValid(email.includes("@") && password.length >= 8);
            // console.log("form", formValid);
        }, [500]);

        return () => {
            clearTimeout(identifier);
        }
    }, [email, password])

    useEffect(() =>{
    })

    const handleFormSubmit = (e) => {
        e.preventDefault();
        fetch("secure/formData", {
            method: "POST",
            body: JSON.stringify(myBody),
        })
    }

    const handleEmailChange = (event) => {
        // console.log(event.target.value);
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        // console.log(event.target.value);
        setPassword(event.target.value);
    }



    return (
        <div >
            <form onSubmit={handleFormSubmit}>
                <div>
                    <text>Email </text>
                    <input id="email" placeholder="Enter Your Email" onChange={handleEmailChange} />
                </div>
                <div>
                    <text>Password </text>
                    <input id="password" placeholder="Enter Your Password" onChange={handlePasswordChange} />
                </div>
                <div>
                    <button type="submit" disabled={!formValid}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Login
