import React ,{ Component } from 'react'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import ListEmployeesComponent from './ListEmployeesComponent'
import EmployeeComponent from './EmployeeComponent'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'


class EmployeeApp extends Component{
    render(){
        return (
            <div className="EmployeeApp">
                
                <Router>
                <HeaderComponent/>
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
                    <FooterComponent/>
                </Router>
                {/*<LoginComponent/>
                <WelcomeComponent/>*/}
            </div>
        )
    }
}








export default EmployeeApp
