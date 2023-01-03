import axios from 'axios';

const URL = "http://localhost:5000/employees";

class EmployeeService{

    getEmployees(){
        return axios.get(URL);
    }

    createEmployee(employee){
        return axios.post(URL, employee);
    }

    getEmployeeById(id){
        return axios.get(URL + "/" + id);
    }

    updateEmployee(id, employee){
        return axios.put(URL + "/" + id, employee ).catch(error=>{
            console.log(error);
        });
    }

    deleteEployee(id){
        return axios.delete(URL + "/" + id);
    }

}

export default new EmployeeService();