/*const initialPeople = [
    {_id: 0, name: "Кот", age: 3},
    {_id: 1, name: "Александр", age: 66},
    {_id: 2, name: "Коля", age: 16},
    {_id: 3, name: "Виктор", age: 44},
    {_id: 4, name: "Дмитрий", age: 40},
    {_id: 5, name: "Ирина", age: 55},
]*/

import {initialPeopleType} from "../HW8";

type actionType = {
    type: string
    payload?: any
}

export const homeWorkReducer = (state: initialPeopleType, action: actionType): initialPeopleType => {
    switch (action.type) {
        case "sort": {
            let newState = state.map(t => ({...t}))
            if(action.payload === "up") {
                 newState.sort((a: any, b: any) => {
                     return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
                } )
            }

            if(action.payload === "down") {
                return newState.sort((a: any, b: any) => {
                    return b.name.toLowerCase() < a.name.toLowerCase() ? -1 : 1
                })
            }

            return newState
        }
        case "check": {
            let newState = state.map(t => ({...t}))
            return newState.filter(a => a.age > 18)
        }
        default: return state
    }
};