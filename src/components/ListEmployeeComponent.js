import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ListEmployee from './css/ListEmployee.css';
import EmployeeService from '../services/EmployeeService';

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: []
        }

        // this.deleteEmployee = this.deleteEmployee.bind(this);

    }

    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data });
            console.log(res.data);
        }).catch(error=>{
            console.log(error);
        });
    }

    deleteEmployee(id){
        EmployeeService.deleteEployee(id).then( (res)=>{
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Employees List</h2>
                <hr />
                <div className="text-left">
                    <Link to={"/add"} className="btn btn-primary ">Add Employee</Link>
                </div>
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email Id</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.employees.map(
                                employee =>
                                    <tr key={employee.id}>
                                        <td>{employee.firstname} </td>
                                        <td>{employee.lastname}</td>
                                        <td> {employee.email} </td>
                                        <td>
                                            <Link to={"/add/"+employee.id} className="btn btn-primary button-space">Update</Link>
                                            <button type="button" className="btn btn-danger button-space"
                                             onClick={()=>this.deleteEmployee(employee.id)} > Delete </button>
                                            <Link to={"/view/"+employee.id} className="btn btn-info button-space">View</Link>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        )
    }


}

export default ListEmployeeComponent;