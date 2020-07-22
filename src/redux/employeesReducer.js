import {employeesAPI} from '../api/api'


const SET_EMPLOYEES = 'SET_EMPLOYEES'
const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE'
const ADD_EMPLOYEE = 'ADD_EMPLOYEE'

let initialState = {
   employees: []
};


const employeesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_EMPLOYEES:
            return {
                ...state,
                employees: action.employees
            };
        case  DELETE_EMPLOYEE:
            return {
                ...state,
                employees: state.employees.filter(em => em._id !== action.id)
            }
        case  ADD_EMPLOYEE:
            return {
                ...state,
                employees: [...state.employees, action.newEmployee]
            }
        default:
            return state
    }
}

//action creators
export const setEmployeesAC = (employees) => ({type: SET_EMPLOYEES, employees });
export const deleteEmployeeAC = (id) => ({type: DELETE_EMPLOYEE, id });
export const addEmployeeAC = (newEmployee) => ({type: ADD_EMPLOYEE, newEmployee });


//thunk creators
export const getEmployees = () => {
    return (dispatch) => {
        employeesAPI.getEmployees()
            .then(res => {
                let employees= res.docs
                dispatch(setEmployeesAC(employees))
            })
            .catch(e => {

                }
            )
    }
}


export default employeesReducer

