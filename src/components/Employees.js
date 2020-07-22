import React, {useState} from "react";
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import {addEmployeeAC, deleteEmployeeAC, getEmployees} from "../redux/employeesReducer";
import { v1 as uuidv1 } from 'uuid';


function Employees() {

    const [name, setName] = useState('',)
    const employees = useSelector((state) => state.employees.employees)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEmployees())
    }, [])

    const deleteEmployee = (id) => {
        dispatch(deleteEmployeeAC(id))
    }

    const addEmployee = (e) => {
        e.preventDefault()
        let newEmp = {
            _id: uuidv1(),
            firstName: name
        }
        dispatch(addEmployeeAC(newEmp))
    }

    const onchange = (e) => {
        let employee = e.currentTarget.value
        setName(employee)
    }

    const employee = employees.map((em, key) => {
            return <div key={key}>
                <ul className='employeesList'>
                    <li>{em.firstName}</li>
                    <button onClick={() => {
                        deleteEmployee(em._id)
                    }}>del
                    </button>
                </ul>
            </div>
        }
    )

    return (
        <div>
            <form onSubmit={addEmployee}>
                <input type="text" value={name} onChange={onchange}/>
                <input type="submit" value="Отправить"/>
            </form>
            {employee}
        </div>
    );
}

export default Employees