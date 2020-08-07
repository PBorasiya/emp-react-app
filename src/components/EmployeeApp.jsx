import React ,{ Component } from 'react'
import moment from 'moment'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'


class EmployeeApp extends Component{
    render(){
        return (
            <div className="EmployeeApp">
                <Router>
                    {/* <HeaderComponent/> */}
                        <Switch>
                            <Route path="/" exact component={ListEmployeesComponent}/>
                            <Route path="/employees/:id" component={EmployeeComponent}/>
                            <Route path="/employees" component={ListEmployeesComponent}/>
                            
                            {/* <AuthenticatedRoute path="/todos/:id" component={TodoComponent}/>
                            <AuthenticatedRoute path="/todos" component={ListTodosComponent}/>
                            <AuthenticatedRoute path="/logout" component={LogOutComponent}/> 
                            
                            <Route component={ErrorComponent}/>*/}
                        </Switch>
                    {/* <FooterComponent/> */}
                </Router>
                {/*<LoginComponent/>
                <WelcomeComponent/>*/}
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


    addEmployeClicked(){
        console.log('add')
        //below line is used to redirect from one page to another
        this.props.history.push(`/employees/-1`)
    }

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

class EmployeeComponent extends Component{
    
    constructor(props){
        super(props)
        this.state={
            id: this.props.match.params.id,
            username : "Vishoo",
            description : '',
            completed : false,
            targetDate : moment(new Date()).utc().format('YYYY-MM-DD')
        }
        // this.onSubmit =  this.onSubmit.bind(this)
        // this.validate =  this.validate.bind(this)
    }
    

    // componentDidMount(){

    //     if(this.state.id === -1){
    //         return
    //     }
    //     let username = AuthenticationService.getLoggedInUsername()
    //     TodoDataService.retrieveTodoById(username,this.state.id)
    //     .then(
    //         response =>  this.setState({
    //             description : response.data.description,
    //             targetDate : moment(response.data.targetDate).format('YYYY-MM-DD')
    //         })
    //     )
    // }

    // validate(values){
    //     let errors = {}
    //     if(!values.description){
    //         errors.description = "Enter a descriptin"
    //     }else if(values.description.length < 5){
    //         errors.description = "Enter atleast 5 characters"
    //     }

    //     if(!values.targetDate){
    //         errors.targetDate = "Enter date"
    //     }else if(!moment(values.targetDate).isValid){
    //         errors.targetDate = "enter valid target date"
    //     }
    //     return errors
    // }

    // onSubmit(values){

    //     let username = AuthenticationService.getLoggedInUsername()
    //     let todo = {
    //         id : this.state.id,
    //         description : values.description,
    //         username : username,
    //         targetDate : values.targetDate,                                        
    //     }
    //     if(this.state.id === -1){
    //         TodoDataService.createTodo(username, todo)
    //         .then(() =>  this.props.history.push('/todos'))
    //     }else{
    //          TodoDataService.updateTodo(username,this.state.id,todo)
    //          .then(() =>  this.props.history.push('/todos'))
    //     }
    // }
  
    render(){

        let {description,targetDate} = this.state

        return (
            <div>
                <h1>Employee</h1>
                <div className="container">
                    <Formik 
                            initialValues={{description,targetDate}}
                            onSubmit ={this.onSubmit}
                            validateOnBlur = {false}
                            validateOnChange = {false}
                            validate = {this.validate}
                            enableReinitialize = {true}
                    >
                        {
                            (props) => (
                               <Form>
                                   {/* <ErrorMessage name="description" component="div" className="alert alert-warning"/>
                                   <ErrorMessage name="targetDate" component="div" className="alert alert-warning"/> */}

                                    <fieldset className="form-group">
                                        <Field className="form-control" type="text" name="firstname" placeholder="e.g. John"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <Field className="form-control" type="text" name="lastname" placeholder="e.g. Doe"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <Field className="form-control" type="text" name="email" placeholder="e.g. abc@example.com"/>
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Submit</button>
                               </Form>
                            )
                        }
                    </Formik>
                </div> 
            </div>
        )
    }
}


//export default ListEmployeesComponent


export default EmployeeApp
