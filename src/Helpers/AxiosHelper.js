import axios from "axios";
import { Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'
var adminPath = process.env.REACT_APP_ADMIN_ROUTE_PREFIX

const commonHeaders = () => {
    axios.defaults.baseURL = "http://localhost:8082/api";
    //axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
    //axios.defaults.headers.common['x-api-key'] = process.env.REACT_APP_LICENCE;
}

const CheckError = (res) => {
    if (res.status === 401) {
        toast.error('Token Expired, Please login Again.')
        localStorage.removeItem('token')
        localStorage.removeItem('role_id')
        return <Navigate to={`${adminPath}/login`} />
    }
}

const errorData = (error) => {
    console.log(error.response);
    //CheckError(error.response)
    return error.response;
}



const AxiosHelper = {
    getData: async (url, formData = null) => {
        try {
            commonHeaders()
            var data = await axios.get(url, { params: formData })
            return data;
        } catch (error) {
            return errorData(error)
        }
    },
    postData: async (url, formData, type) => {
        try {
            commonHeaders()
            var data = await axios.post(url, formData, { headers: { "Content-Type": type ? "multipart/form-data" : "application/json" } })
            return data;
        } catch (error) {
            return errorData(error)
        }
    },
    putData: async (url, formData, type) => {
        try {
            commonHeaders()
            var data = await axios.put(url, formData, { headers: { "Content-Type": type ? "multipart/form-data" : "application/json" } })
            return data;
        } catch (error) {
            return errorData(error)
        }
    },
    deleteData: async (url) => {
        try {
            commonHeaders()
            var data = await axios.delete(url)
            return data;
        } catch (error) {
            return errorData(error)
        }
    }
}


export default AxiosHelper;