import React ,{ Component } from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import EmployeeDataService from '../RESTAPIS/EmployeeDataService.js'

class EmployeeComponent extends Component{
    
    constructor(props){
        
        super(props)
        this.state={
            id: this.props.match.params.id,
            firstName : '',
            lastName : '',
            email : ''
        }
        
        this.onSubmit =  this.onSubmit.bind(this)
        this.validate =  this.validate.bind(this)
    }
    

    componentDidMount(){

        if(this.state.id === -1){
            return
        }
        
        EmployeeDataService.retrieveEmployeeById(this.state.id)
        .then(
            response =>  this.setState({
                id : response.data.id,
                firstName : response.data.firstName,
                lastName : response.data.lastName,
                email : response.data.email
            })
        )
    }

    validate(values){
        let errors = {}
        if(!values.firstName){
            errors.firstName = "Enter first name"
        }

        if(!values.lastName){
            errors.lastName = "Enter last name"
        }

        if(!values.email){
            errors.email = "Enter Email"
        }
        
        return errors
    }

    onSubmit(values){
        
        let employee = {
            id : values.id,
            firstName : values.firstName,
            lastName : values.lastName,
            email : values.email,                                       
        }
       
        if (this.state.id === -1 ){
            console.log("success")
            EmployeeDataService.createEmployee(employee)
            .then(() =>  this.props.history.push('/employees'))
            
        }else{
            console.log(employee)
            console.log("hitting this")
            EmployeeDataService.updateEmployee(employee)
            .then(() =>  this.props.history.push('/employees'))
        }
    }
  
    render(){

       
        let {id,firstName,lastName, email} = this.state

        return (
            <div>
                <h1>Employee</h1>
                <div className="container">
                    <Formik 
                            initialValues={{id,firstName,lastName, email}}
                            onSubmit ={this.onSubmit}
                            validateOnBlur = {false}
                            validateOnChange = {false}
                            validate = {this.validate}
                            enableReinitialize = {true}
                    >
                        {
                            (props) => (
                               <Form>
                                   <ErrorMessage name="firstName" component="div" className="alert alert-warning"/>
                                   <ErrorMessage name="lastName" component="div" className="alert alert-warning"/>
                                   <ErrorMessage name="email" component="div" className="alert alert-warning"/>

                                    <fieldset className="form-group" >
                                        <Field className="form-control" type="text" name="firstName"  placeholder="e.g. John"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <Field className="form-control" type="text" name="lastName"  placeholder="e.g. Doe"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <Field className="form-control" type="text" name="email"  placeholder="e.g. abc@example.com"/>
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