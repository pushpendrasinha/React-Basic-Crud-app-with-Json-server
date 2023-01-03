import React, { Component } from "react";
import { Link } from "react-router-dom";
import CreateEmployee from './css/CreateEmployee.css';
import EmployeeService from "../services/EmployeeService";
import { withRouter } from "./withRouter";

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props);

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.addorUpdateEmployee = this.addorUpdateEmployee.bind(this);

        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            // submitted: false,
            id: this.props.router.params.id,
        }
    }

    componentDidMount(){
        if(this.state.id === undefined){
            return
        }
        else{
            EmployeeService.getEmployeeById(this.state.id).then((res) => {
                let employee = res.data;
                this.setState({ firstname: employee.firstname,
                lastname: employee.lastname,
                email: employee.email });
                console.log(employee);
            });
        }
       
    }

    onChangeFirstName(event) {
        this.setState({
            firstname: event.target.value
        });
    }

    onChangeLastName(event) {
        this.setState({
            lastname: event.target.value
        });
    }

    onChangeEmail(event) {
        this.setState({
            email: event.target.value
        })
    }

    addorUpdateEmployee(event) {
        // using event as argument will prevent page reloading after form submit
        event.preventDefault();
        //
        let employee = { firstname: this.state.firstname, lastname: this.state.lastname, email: this.state.email };
        console.log(employee);

        if(this.state.id === undefined){
            EmployeeService.createEmployee(employee).then((res) => {
                console.log(employee);
                this.props.router.navigate("/");
            }).catch(error =>{
                console.log(error);
            });
        }else{
                EmployeeService.updateEmployee(this.state.id, employee).then( res=>{
                    console.log(employee);
            }).catch(error=>{
                console.log(error);
            })
        }
    }

    render() {
        return (
            <div className="container">
                <div className="wrapper">
                    <div className="card card_template" >
                        <div className="card-header">
                            Add Employee
                        </div>
                        <div className="card-body body_template">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="firstname">First Name</label>
                                    <input type="text" className="form-control" id="firstname" placeholder="Enter First Name"
                                        value={this.state.firstname} onChange={this.onChangeFirstName} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastname">Last Name</label>
                                    <input type="text" className="form-control" id="lastname" placeholder="Enter Last Name"
                                        value={this.state.lastname} onChange={this.onChangeLastName} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Id</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter email address"
                                        value={this.state.email} onChange={this.onChangeEmail} />
                                </div>
                                <br></br>
                                <button type="submit" className="btn btn-primary " onClick={this.addorUpdateEmployee} >Submit</button>
                                <Link to={"/employees"} className="btn btn-danger button-space"  >Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter (CreateEmployeeComponent);