import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark p-3">
                    <Link to={"/"} className="navbar-brand">
                        Employee Management App
                    </Link>
                    <div className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={"/employees"} className="nav-link">
                                EmployeeList
                            </Link>
                        </li>
                        <li className="nav-item">
                        <Link to={"/add"} className="nav-link">
                                AddEmployee
                            </Link>
                        </li>
                    </div>
                </nav>
            </header>
        )
    }

}

export default HeaderComponent;