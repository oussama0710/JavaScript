import React, { useState } from  'react';
    
    
const Registration = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmpassword, setConfirmpassword] = useState(""); 
    const [firstNameError, setFirstNameError] = useState(""); 
    const [lastNameError, setLastNameError] = useState(""); 
    const [emailError, setEmailError] = useState(""); 
    const [passwordError, setPasswordError] = useState(""); 
    const [confirmPasswordError, setConfirmPasswordError] = useState(""); 
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname,lastname, email, password,confirmpassword};
        console.log("Welcome", newUser);
    };
    const validateFirstName = (e) => {
        setFirstname(e.target.value);
        if(e.target.value.length < 2 && e.target.value.length !== 0) {
            setFirstNameError(" First name must be more than 2 characters!");
        } else {
            setFirstNameError("");
        }
    }
    const validateLastName = (e) => {
        setLastname(e.target.value);
        if(e.target.value.length < 2 && e.target.value.length !== 0) {
            setLastNameError(" Last name must be more than 2 characters!");
        } else {
            setLastNameError("");
        }
    }
    const validateEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 2 && e.target.value.length !== 0) {
            setEmailError(" Email must be more than 2 characters!");
        } else {
            setEmailError("");
        }
    }
    const validatePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8 && e.target.value.length !== 0) {
            setPasswordError(" Password must be more than 8 characters!");
        } else {
            setPasswordError("");
        }
    }
    const validateConfirmPassword = (e) => {
        setConfirmpassword(e.target.value);
        if(e.target.value !== password && e.target.value.length !== 0 ) {
            setConfirmPasswordError(" Passwords must match!");
        } else {
            setConfirmPasswordError("");
        }
    }
    return(
        <div>
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) =>{
                    setFirstname(e.target.value) 
                    validateFirstName(e)
                    
                } } />
                {
                    firstNameError ?
                    <p style={{color:'red'}}>{ firstNameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => 
                {
                    setLastname(e.target.value)
                    validateLastName(e)
                } } />
                {
                    lastNameError ?
                    <p style={{color:'red'}}>{ lastNameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) =>{ 
                    setEmail(e.target.value)
                    validateEmail(e)
                    }
                    } />
                    {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ (e) => {
                    setPassword(e.target.value) 
                    validatePassword(e)
                    }} />
                    {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Reset Password: </label>
                <input type="password" onChange={ (e) => {
                    setConfirmpassword(e.target.value)
                    validateConfirmPassword(e)
                } } />
                {
                    confirmPasswordError ?
                    <p style={{color:'red'}}>{ confirmPasswordError }</p> :
                    ''
                }
            </div>
            <input type="submit" value="Create User" />
        </form>
        </div>
    );
};

export default Registration