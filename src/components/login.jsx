
import React, { useState, ChangeEvent } from "react";
import AppPage from "./appPage";

function Login() {
    // state variable declaration
    const [state, setState] = useState('loggedOff');
    const [user, setUser] = useState('');

    // setting input value to state variable
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUser(e.target.value);
    }

    // Function for submit button
    const handleClick = () => {
        if (user === '') {
            alert('invalid name!');
        }
        else {
            setState('loggedOn')
        }
    }

    // returns user inerface
    if (state === 'loggedOff') {
        return (
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-10">
                            <div className="card">
                                <div className="card-body p-5" data-mdb-perfect-scrollbar="true">
                                    <h3>Log In</h3><br />
                                    <div className="d-flex justify-content-center align-items-center mb-4">
                                        <div className="form-outline flex-fill">
                                            <input value={user} onChange={handleChange} className="form-control" id="form2" />
                                            <label className="form-label" for="form2">Name</label><br />
                                            <button onClick={handleClick} className="btn btn-primary">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    else if (state === 'loggedOn') {
        return (
            <>
            <AppPage user={user} />
            </>
            
        )
    }

}

export default Login;