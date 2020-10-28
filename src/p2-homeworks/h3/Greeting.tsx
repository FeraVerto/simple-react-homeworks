import React, {ChangeEvent} from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {

    const inputClass = s.error; // need to fix with (?:)
    const someClass = s.someClass

    return (
        <div className={s.inputBlock}>
            <span>Количество наивных: {totalUsers}</span>
            <input value={name}
                   onChange={setNameCallback}
                   className={error ? inputClass : someClass}
                   placeholder="Введите свое имя"
            />
            <span className={s.errorText}>{error}</span>
            <button onClick={addUser} className={s.button}>
                Распределяющая шляпа
            </button>
        </div>
    );
}

export default Greeting;
