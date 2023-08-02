import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";


import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const AddContact = () => {
    const { store, actions } = useContext(Context);

    const params = useParams(); 

	const [user, setUser] = useState({
		name: "",
		email: "",
		phone: "",
        address: ""
	});

    //function to change the value from on an specific id of an input an assing it to a new object
    function onChangeForm(e) {
        const { id, value } = e.target;

        console.log({id, value});

        setUser({...user, [id]: value });

        console.log({...user, [id]: value })
    }

    // function onChangeForm(e) {
    //     user[e.target.id] = e.target.value
    //     setUser(user)
            
    //     console.log(e.target.value) 
    // }
    
    useEffect (() => {
        console.log("params.index: " + !!params.index);

        if (store.users && store.users.length > 0 && store.users[params.index]) {
            setUser(store.users[params.index]) 
        }
    }, [store.users])



    return (
        <div className="container-fluid">
            <h1>Add a New Contact</h1>
            <form className="row g-3" onChange={(e) =>  onChangeForm(e)} onSubmit={(e) => e.preventDefault()}>
                <div className="col-md-12">
                    <label className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="name" />
                </div>
                <div className="col-md-12">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" />
                </div>
                <div className="col-md-12">
                    <label className="form-label">Phone</label>
                    <input type="number" className="form-control" id="phone" />
                </div>
                <div className="col-12">
                    <label className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" placeholder="San Jose" />
                </div>
                <div className="d-grid gap-2">
                    <button type="submit" onClick={() => (!!params.index) ? actions.update(params.index, user) : actions.addContact(user)} className="btn btn-primary">Save</button>
                </div>
                <Link className="btn" to="/contact">
                    <button className="btn btn-primary">Back to Contacts</button>
                </Link>
                
            </form>
        </div>
    );
};
export default AddContact
