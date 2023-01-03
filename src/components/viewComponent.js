import React, { Component } from "react";
import { Link } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import { withRouter } from "./withRouter";

class ViewComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.router.params.id,
            employee: { }
        }
    }

    componentDidMount() {
        this.getEmmployee(this.state.id);
    }

    getEmmployee(id) {
        EmployeeService.getEmployeeById(id).then((res) => {
            this.setState({ employee: res.data });
            console.log(res.data);
        });
    }  

    render() {
        return (
            <div className="container">
                <div className="wrapper">
                    <div className="card card_template">
                        <h5 className="card-header">Hello {this.state.employee.firstname} </h5>
                        <div className="card-body">
                            <h5 className="card-title">Full Name: {this.state.employee.firstname + " " + 
                            this.state.employee.lastname} </h5>
                            <p className="card-text">Email Address: {this.state.employee.email} </p>
                            <Link to={"/add"+"/"+this.state.employee.id} className="btn btn-primary">Update</Link>
                            <Link to={"/"} className="btn btn-info button-space">Cancel</Link>
                        </div>
                    </div>
                </div>
            </div>
        )

    }

}

export default withRouter(ViewComponent);