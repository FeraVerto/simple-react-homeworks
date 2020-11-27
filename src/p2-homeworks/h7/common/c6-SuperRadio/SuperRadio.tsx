import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from "react";
import s from "./SuperRadio.module.css"
/*import {Simulate} from "react-dom/test-utils";*/
/*import input = Simulate.input;*/

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    name: string
    value: string
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeOption !== undefined && onChangeOption(e.currentTarget.value)
    }


    const mappedOptions: any[] = options ? options.map((o, i) => ( // map options with key
        <div>
            <input
                id={o}
                type={"radio"}
                onChange={onChangeCallback}
                name={name}
                value={value}
                checked
                {...restProps}
                // name, checked, value, onChange
            />
            <label htmlFor={o} key={name + "-" + i}>
                {o}
            </label>

        </div>


    )) : [];

    return (
        <div className={s.radio}>
            {mappedOptions}
        </div>
    );
}

export default SuperRadio;
