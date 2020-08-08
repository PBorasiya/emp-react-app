import React ,{ Component } from 'react'
import EmployeeDataService from '../RESTAPIS/EmployeeDataService.js'

class ListEmployeesComponent  extends Component{
    
    constructor(props){
        super(props)
        this.state={
            employees : [],
                // {id : 1 , "firstname" : "Pranav" , "lastname" : "Borasiya", "email" : "pranav@gmail.com1"},
                // {id : 2 , "firstname" : "Neel" , "lastname" : "Patel", "email" : "pranav@gmail.com2"},
                // {id : 3 , "firstname" : "Vaibhav" , "lastname" : "Patel", "email" : "pranav@gmail.com3"},
                // {id : 4 , "firstname" : "Vishakha" , "lastname" : "Mehta", "email" : "pranav@gmail.com4"},
                // {id : 5 , "firstname" : "Kalpit" , "lastname" : "Patel", "email" : "pranav@gmail.com5"}
            
            
            message : null
        }
        this.deleteEmployeeClicked = this.deleteEmployeeClicked.bind(this)
        this.updateEmployeeClicked = this.updateEmployeeClicked.bind(this)
        this.refreshEmployees = this.refreshEmployees.bind(this)
        this.addEmployeClicked = this.addEmployeClicked.bind(this)
    }

    componentDidMount(){
        this.refreshEmployees();
    }
    
    refreshEmployees(){
        //let username = AuthenticationService.getLoggedInUsername()
        EmployeeDataService.retrieveAllEmployees()
        .then(
            response => {
                this.setState({
                    employees: response.data
                })
            }
        )
        .catch()
    }


    addEmployeClicked(){
        console.log('add')
        //below line is used to redirect from one page to another
        this.props.history.push(`/employees/-1`)
    }

    deleteEmployeeClicked(id){
       // let username = AuthenticationService.getLoggedInUsername()
       EmployeeDataService.deleteEmployee(id)
        .then(
            response => {
                this.setState({
                    message : `Employee with empId ${id} deleted`
                })
                this.refreshEmployees()
            }
        )
    }

    updateEmployeeClicked(id){
        console.log('update' +id)
        //below line is used to redirect from one page to another
        this.props.history.push(`/employees/${id}`)
    }

    render(){
        console.log(this.state.employees)
    return (
            <div>
                <h1>Employee List</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <table className="table table-striped"> 
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Delete</th>
                            <th>Update</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                       { 
                        this.state.employees.map(
                            (employee) => 
                                <tr key={employee.id}>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.email}</td>
                                    {/* <td>{todo.completed.toString()}</td>
                                    <td>{moment(todo.targetDate).utc().format('YYYY-MM-DD')}</td> */}
                                    
                                    <td><button className="btn btn-warning" onClick={()=>this.deleteEmployeeClicked(employee.id)}>Delete</button></td>
                                    <td><button className="btn btn-success" onClick={()=>this.updateEmployeeClicked(employee.id)}>Update</button></td>
                                </tr>
                        )
                        }
                    </tbody>
                </table>
                <div className="container">
                        <button className="btn btn-lg btn-success" onClick={this.addEmployeClicked}>Add Employee</button>
                </div>
            </div>
        )
    }
}


export default ListEmployeesComponent