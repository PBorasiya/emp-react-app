import axios from 'axios'

class EmployeeDataService
{
    retrieveAllEmployees(){
       
        return axios.get(`http://localhost:8080/api/employees`,this.setupAxiosInterceptor());
    }

    retrieveEmployeeById(id){
        return axios.get(`http://localhost:8080/api/employees/${id}`,this.setupAxiosInterceptor());
    }

    deleteEmployee(id){
        return axios.delete(`http://localhost:8080/api/employees/${id}`,this.setupAxiosInterceptor());
    }

    updateEmployee(employee){
        return axios.put(`http://localhost:8080/api/employees`,employee,this.setupAxiosInterceptor());
    }

    createEmployee(employee){

        return axios.post(`http://localhost:8080/api/employees/`,employee, this.setupAxiosInterceptor());
    }
    
    setupAxiosInterceptor(){
        let username = 'pranav'
        let password = 'pranav'

        let basicAuthHeader = 'Basic ' + window.btoa(username +":"+ password)
        axios.interceptors.request.use(
            (config) =>{
                config.headers.authorization = basicAuthHeader
                return config
            }
        )
    }

}

export default new EmployeeDataService()