import React, {useState} from "react";
import {homeWorkReducer} from "./bll/homeWorkReducer";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from "./HW8.module.css";

const initialPeople: initialPeopleType = [
    {_id: 0, name: "Кот", age: 3},
    {_id: 1, name: "Александр", age: 66},
    {_id: 2, name: "Коля", age: 16},
    {_id: 3, name: "Виктор", age: 44},
    {_id: 4, name: "Дмитрий", age: 40},
    {_id: 5, name: "Ирина", age: 55},
]

export type PeopleType = {
    _id: number
    name: string
    age: number
}

export type initialPeopleType = Array<PeopleType>

function HW8() {
    const [people, setPeople] = useState(initialPeople);

    const finalPeople = people.map(p => (
        <div key={p._id} className={s.people_item}>
            <div>{p.name}</div>
            <div>{p.age}</div>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: "sort", payload: "up"}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: "sort", payload: "down"}))
    const checkAge = () => setPeople(homeWorkReducer(initialPeople, {type: "check"}))

    return (
        <div className={s.sort_people}>

            <div className={s.people_list}>
                {finalPeople}
            </div>

            <div className={s.button_block}>
                <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
                <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
                <div><SuperButton onClick={checkAge}>check age</SuperButton></div>
            </div>


            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
        </div>
    );
}

export default HW8;
