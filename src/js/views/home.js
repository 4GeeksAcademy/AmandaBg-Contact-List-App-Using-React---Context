import React from "react";
import { Link } from "react-router-dom";

import "../../styles/home.css";

export const Home = () => (
    <div>
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="https://i.pinimg.com/originals/37/4f/b1/374fb1fb0cf178cb082c3cb43f0561dc.jpg" className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Name</h5>
                        <p className="card-text">Adress</p>
                        <p className="card-text">Phone<small className="text-muted">Last updated 3 mins ago</small></p>
                        <p className="card-text">email<small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <Link className="btn" to="/contact">
                <button className="btn btn-primary">Back to Contacts</button>
            </Link>
        </div>
    </div>
);

