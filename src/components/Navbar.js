import React, {useEffect, useState} from 'react';
import './styles/_navber.scss';
import {Nav} from "react-bootstrap";
import axios from "axios";

function Login() {
    return <small>Login or Register</small>;
}

function SearchField() {
    return <form className="form">
        <div className="form-group">
            <input type='text' className="form-control" placeholder="Search"/>
        </div>
    </form>;
}

function Cart() {
    return <button type="button" className="btn btn-primary">Cart</button>;
}

function Menu() {
    return (
    <Nav
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
        <Nav.Item>
            <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
                Disabled
            </Nav.Link>
        </Nav.Item>
    </Nav>
    );
}

function Navbar(props) {
    const [site_info, set_site_info] = useState({});

    const fetch = () => {
        axios({
            method: "GET",
            url: `${process.env.REACT_APP_API_URL}/site_info`
        })
            .then(response => set_site_info(response.data))
            .catch(error => console.error(error));
    }

    useEffect(() => {
        fetch();
    }, []);

    return (
        <div className="site-header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        {site_info.name}
                    </div>
                    <div className="col-6">
                        <div className="login-container">
                            <Login/>
                        </div>
                        <div className="search-container">
                            <SearchField/>
                        </div>
                        <div className="cart-button-container">
                            <Cart/>
                        </div>
                    </div>
                </div>
                <nav>
                    <Menu/>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
