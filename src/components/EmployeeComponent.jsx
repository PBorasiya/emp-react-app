import React ,{ Component } from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'

class EmployeeComponent extends Component{
    
    constructor(props){
        super(props)
        this.state={
            id: this.props.match.params.id,
            username : "Vishoo",
            description : '',
            completed : false,
            //targetDate : moment(new Date()).utc().format('YYYY-MM-DD')
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

export default EmployeeComponent