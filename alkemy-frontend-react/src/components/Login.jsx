import axios from 'axios'
import { Formik } from 'formik'
import React, { useState } from 'react'
import "./login.css"

const Login = () => {
    const [submitOk, setSubmitOk] = useState(false)

    const axios = require('axios').default;

    const newPost = {
        userId: 1,
        title: 'A new post',
        body: 'This is the body of the new post'
    };

    const sendPostRequest = async (values) => {
        try {
            const resp = await axios.post('http://challenge-react.alkemy.org/', values);
            localStorage.setItem("token",
                JSON.stringify(resp.data));
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <div className="container" >
                <Formik
                    initialValues={{
                        email: '',
                        password: ''
                    }}
                    validate={(values) => {
                        let error = {}
                        if (!values.password) {
                            error.password = "Password 4 to 8 characters"
                        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.password)) {
                            error.password = "Password sorry, no numbers alowed"
                        }
                        if (!values.email) {
                            error.email = "Enter an email"
                        } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
                            error.email = "Enter a valid email please"
                        }
                        return error
                    }}

                    onSubmit={(values, { resetForm }) => {
                        console.log(values);
                        resetForm()
                        sendPostRequest(values)
                        setSubmitOk(true)
                        setTimeout(() => {
                            setSubmitOk(false)
                        }, 10000);
                    }}
                >
                    {({ values, handleSubmit, touched, handleChange, handleBlur, errors }) => (<form className="form" onSubmit={handleSubmit} >
                        {console.log(errors)}
                        <div><label htmlFor="email">email</label>
                            <input className="btn btn-secondary btn-lg m-1"
                                type="email"
                                id="email"
                                name="email"
                                placeholder="email..."
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.email && errors.email && <p className="error">{errors.email} </p>
                            }</div>

                        <div><label htmlFor="password">password</label>
                            <input className="btn btn-secondary btn-lg m-1"
                                type="text" id="password"
                                name="password"
                                placeholder="password..."
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.password && errors.password && <p className="error">{errors.password} </p>
                            }
                        </div>
                        <div className="d-grid gap-2" ><button className="btn btn-info " > Submit</button></div>

                        {submitOk ? <p className="succes">Submit Ok</p> : null}
                    </form>)}

                </Formik>
            </div>
        </>
    )
}

export default Login
