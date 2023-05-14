import React, { useState } from 'react'
import { ref, set } from "firebase/database"
import { auth, db } from '../firebase'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth' //jumbled and missing ,

export default function Register() {
    const [firstName, setFirstName] = useState('')
    const [last_name, setLastName] = useState(' ')
    const [birthday, setBirthday] = useState(' ')
    const [gender, setGender] = useState(' ')
    const [address, setAddress] = useState(' ')
    const [ComName, setComName] = useState(' ')
    const [CamAdd, setCamAdd] = useState(' ')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState(' ')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [agree, setAgree] = useState(' ')
    const [error, setError] = useState('')


    const validatePassword = () => {
        let isValid = true //missing true
        if (password !== '' && confirmPassword !== '') {
            if (password !== confirmPassword) {
                isValid = false
                alert("Password don't match!")
                setError('Passwords does not match')
                console.log(error)
            }

            return isValid
        }
    }


    const register = e => {
        e.preventDefault()
        setError('')
        if (validatePassword()) {
            // Create a new user with email and password using firebase
            createUserWithEmailAndPassword(auth, email, password)
                .then(async (res) => {
                    await updateProfile(auth.currentUser, {
                        displayName: firstName + " " + last_name
                    })

                    set(ref(db, 'users/' + auth.currentUser.uid), {
                        Birthday: birthday,
                        Gender: gender,
                        Address: address,
                        ComName: ComName,
                        ComAdd: CamAdd,
                        Phone: phone
                    });

                    console.log(res.user)
                })
                .catch(error => setError(err.message)) //variable
        }          //missing )
        setEmail('')
        setPassword('')
        setConfirmPassword('')
    }
    document.title = "Registration";
    return (
        <main id="main">
            <section class="breadcrumbs">
                <div class="container">
                    <div class="d-flex justify-content-between align-items-center">
                        <h2></h2>
                        <ol>
                            <li>Registration</li>
                        </ol>
                    </div>
                </div>
            </section>
            <section class="about" data-aos="fade-up">
                <div class="container">
                    <div class="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-md-6">
                                    <form onSubmit={register} name='registration_form'>
                                        <div class="row mb-3">
                                            <div class="col">
                                                <div class="form-group">
                                                    <label for="first_name" class="form-label">First Name</label>
                                                    <input type="text" class="form-control" id="first_name" name="first_name" value={firstName} onChange={e => setFirstName(e.target.value)} />
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="form-group">
                                                    <label for="last_name" class="form-label">Last Name</label>
                                                    <input type="text" class="form-control" id="last_name" name="last_name" value={last_name} onChange={e => setLastName(e.target.value)} />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mb-3">
                                            <div class="form-group">
                                                <label for="birthday" class="form-label">Birthday</label>
                                                <div class="input-group">
                                                    <input type="date" class="form-control js-datepicker" id="birthday" name="birthday" value={birthday} onChange={e => setBirthday(e.target.value)} />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mb-3">
                                            <div class="form-group">
                                                <label for="gender" class="form-label">Gender</label>
                                                <div class="form-check">
                                                    <input type="radio" class="form-check-input" id="male" name="gender" value="male" checked={gender === "male"} onChange={e => setGender(e.target.value)} />
                                                    <label class="form-check-label" for="male">Male</label>
                                                </div>
                                                <div class="form-check">
                                                    <input type="radio" class="form-check-input" id="female" name="gender" value="female" checked={gender === "female"} onChange={e => setGender(e.target.value)} />
                                                    <label class="form-check-label" for="female">Female</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mb-3">
                                            <div class="form-group">
                                                <label for="address" class="form-label">Address</label>
                                                <input type="text" class="form-control" id="address" name="address" value={address} onChange={e => setAddress(e.target.value)} />
                                            </div>
                                        </div>

                                        <div class="mb-3">
                                            <div class="form-group">
                                                <label for="phone" class="form-label">Company Name</label>
                                                <input type="text" class="form-control" id="ComName" name="Company Name" value={ComName} onChange={e => setComName(e.target.value)} />
                                            </div>
                                        </div>

                                        <div class="mb-3">
                                            <div class="form-group">
                                                <label for="phone" class="form-label">Company Address</label>
                                                <input type="text" class="form-control" id="CamAdd" name="Company Address" value={CamAdd} onChange={e => setCamAdd(e.target.value)} />
                                            </div>
                                        </div>

                                        <div class="mb-3">
                                            <div class="form-group">
                                                <label for="email" class="form-label">Email</label>
                                                <input type="email" class="form-control" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
                                            </div>
                                        </div>
                                        <div class="mb-3">
                                            <div class="form-group">
                                                <label for="phone" class="form-label">Phone Number</label>
                                                <input type="text" class="form-control" id="phone" name="phone" value={phone} onChange={e => setPhone(e.target.value)} />
                                            </div>
                                        </div>
                                        <div class="mb-3">
                                            <div class="form-group">
                                                <label for="password" class="form-label">Password</label>
                                                <input type="password" class="form-control" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                                            </div>
                                        </div>
                                        <div class="mb-3">
                                            <div class="form-group">
                                                <label for="password" class="form-label">Confirm Password</label>
                                                <input type="password" class="form-control" id="confirmpassword" name="confirmpassword" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                                            </div>
                                        </div>
                                        <div class="mb-3">
                                            <div class="form-group">
                                                <label for="agree"><input type="checkbox" name="agree" id="agree" /> By ticking, you are confirming that you have read, understood and agree to "null" <a href="termsandcondition.html">terms and conditions</a></label>
                                            </div>
                                        </div>
                                        <div class="mb-3">
                                            <div class="form-group">
                                                <input type="submit" value="Submit" />

                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <br />
        </main>
    );

}