import React, {useEffect, useState} from 'react';
import './styles/_navber.scss';
import {Nav, NavDropdown} from "react-bootstrap";
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
    const [menu_list, set_menu_list] = useState([]);

    const fetch = () => {
        axios({
            method: "GET",
            url: `${process.env.REACT_APP_API_URL}/categories`
        })
            .then(response => set_menu_list(response.data))
            .catch(error => console.error(error));
    }

    useEffect(() => {
        fetch();
    }, []);

    return (
    <Nav>
        {
            menu_list.map((element) => {
                if (element.items) {
                    return <NavDropdown title={element.title} id="nav-dropdown">
                        {
                            element.items.map((item) => {
                                return <NavDropdown.Item>{item}</NavDropdown.Item>
                            })
                        }
                    </NavDropdown>
                } else {
                    return <Nav.Item>
                        <Nav.Link>{element.title}</Nav.Link>
                    </Nav.Item>
                }
            })
        }
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