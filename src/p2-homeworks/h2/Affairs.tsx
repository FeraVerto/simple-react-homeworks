import React, {useState} from "react";
import Affair from "./Affair";
import s from "./Affairs.module.css"
import {AffairType, FilterType} from "./HW2";
import AlternativeAffairs from "./AlternativeAffairs";
import {log} from "util";

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <li>
            <Affair // should work
                key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
                affair={a}
                deleteAffairCallback={props.deleteAffairCallback}
            />
        </li>
    ))

    const setAll = () => {
        props.setFilter("all")
    }; // need to fix
    const setHigh = () => {
        props.setFilter("high")
    };
    const setMiddle = () => {
        props.setFilter("middle")
    };
    const setLow = () => {
        props.setFilter("low")
    };
    

    return (
        <div className={s.body}>
            <ul className={s.list}>
                {mappedAffairs}
            </ul>
            <div className={s.filter_button}>
                <button onClick={setAll}>All</button>
                <button onClick={setHigh}>High</button>
                <button onClick={setMiddle}>Middle</button>
                <button onClick={setLow}>Low</button>
            </div>

        </div>
    );
}

export default Affairs;