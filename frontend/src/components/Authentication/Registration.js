import React, { useState } from 'react';
const Registration = (props) => {
    return (
        <div className="container">
            <form>
                <div className="form-group">
                    <label for="firstName">First Name</label>
                    <input type="text" className="form-control" id="firstName" placeholder="Enter First Name" />
                </div>
                <div className="form-group">
                    <label for="lastName">Last Name</label>
                    <input type="text" className="form-control" id="lastName" placeholder="Enter Last Name" />
                </div>
                <div class="form-group">
                    <label for="userRole">Register As</label>
                    <select className="form-control" id="userRole">
                        <option>Select One</option>
                        <option>Coach</option>
                        <option>Player</option>
                    </select>
                </div>

                <div className="form-group">
                    <label for="email">Email address</label>
                    <input type="email" className="form-control" id="email"  placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label for="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter Password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>

    )
}

export default Registration