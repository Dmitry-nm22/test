import * as axios from "axios";


const instance = axios.create({
    baseURL: 'https://demo.resthapi.com/',
})


export const employeesAPI = {
    getEmployees () {
        return  instance.get('user?%24select=firstName&%24searchFields=firstName&%24sort=-firstName')
            .then(response => response.data)

    },

}