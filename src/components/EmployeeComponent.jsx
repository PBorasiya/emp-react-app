import React ,{ Component } from 'react'


class EmployeeComponent extends Component{
    render(){
        return (
            <div>
                <ListEmployeesComponent/>
            </div>
        )
    }
}

class ListEmployeesComponent  extends Component{
    
    constructor(props){
        super(props)
        this.state={
            todos : [
                {id : 1 , "firstname" : "Pranav" , "lastname" : "Borasiya", "email" : "pranav@gmail.com1"},
                {id : 2 , "firstname" : "Neel" , "lastname" : "Patel", "email" : "pranav@gmail.com2"},
                {id : 3 , "firstname" : "Vaibhav" , "lastname" : "Patel", "email" : "pranav@gmail.com3"},
                {id : 4 , "firstname" : "Vishakha" , "lastname" : "Mehta", "email" : "pranav@gmail.com4"},
                {id : 5 , "firstname" : "Kalpit" , "lastname" : "Patel", "email" : "pranav@gmail.com5"},
            ],
            message : null
        }
        // this.deleteTodoClicked = this.deleteTodoClicked.bind(this)
        // this.updateTodoClicked = this.updateTodoClicked.bind(this)
        // this.refreshTodos = this.refreshTodos.bind(this)
        this.addEmployeClicked = this.addEmployeClicked.bind(this)
    }

    // componentDidMount(){
    //     this.refreshTodos();
    // }
    
    // refreshTodos(){
    //     let username = AuthenticationService.getLoggedInUsername()
    //     TodoDataService.retrieveAllTodos(username)
    //     .then(
    //         response => {
    //             this.setState({
    //                 todos: response.data
    //             })
    //         }
    //     )
    //     .catch()
    // }


    // addEmployeClicked(){
    //     console.log('add')
    //     //below line is used to redirect from one page to another
    //     this.props.history.push(`/todos/-1`)
    // }

    // deleteTodoClicked(id){
    //     let username = AuthenticationService.getLoggedInUsername()
    //     TodoDataService.deleteTodo(username,id)
    //     .then(
    //         response => {
    //             this.setState({
    //                 message : `Delete of todo with id ${id} successful for user ${username}`
    //             })
    //             this.refreshTodos()
    //         }
    //     )
    // }

    // updateTodoClicked(id){
    //     console.log('update' +id)
    //     //below line is used to redirect from one page to another
    //     this.props.history.push(`/todos/${id}`)
    // }

    render(){
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
                        this.state.todos.map(
                            todo => 
                                <tr key={todo.id}>
                                    <td>{todo.firstname}</td>
                                    <td>{todo.lastname}</td>
                                    <td>{todo.email}</td>
                                    {/* <td>{todo.completed.toString()}</td>
                                    <td>{moment(todo.targetDate).utc().format('YYYY-MM-DD')}</td> */}
                                    
                                    <td><button className="btn btn-warning" onClick={()=>this.deleteTodoClicked(todo.id)}>Delete</button></td>
                                    <td><button className="btn btn-success" onClick={()=>this.updateTodoClicked(todo.id)}>Update</button></td>
                                </tr>
                        )
                        }
                    </tbody>
                </table>
                <div className="container">
                        <button className="btn btn-lg btn-success" onClick={this.addTodoClicked}>Add Employee</button>
                </div>
            </div>
        )
    }
}

//export default ListEmployeesComponent


export default EmployeeComponent
