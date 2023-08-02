import React, { useContext }  from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const ContactCard = (props) => {
    const { store, actions } = useContext(Context);
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh00ObhKVXq0u8pwZcBJT9VG083sHO2iP5Zw&usqp=CAU" className="img-fluid" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title"><b>{props.contact.name}</b></h5>
                        <p className="card-text"><i className="fas fa-map-marker-alt m-2"/>{props.contact.address}</p>
                        <p className="card-text"><i className="fas fa-phone m-2"/>{props.contact.phone}</p>
                        <p className="card-text"><i className="fas fa-envelope m-2"/>{props.contact.email}</p>
                    </div>
                    <div className="icon">
                        <button type="submit" className="btn me" onClick={() => props.delete()}><i className="fas fa-trash"></i></button>
                        <Link to={"/addContact/" + props.index}>
                            <button type="submit" className="btn me"><i className="fas fa-edit"></i></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;