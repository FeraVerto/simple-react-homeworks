import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from "react";
import s from "./SuperRadio.module.css"

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
        onChange && onChange(e)
        onChangeOption !== undefined && onChangeOption(e.currentTarget.value)
    }


    const mappedOptions: any[] = options ? options.map((o, i) => (
        <div className={s.item} key={name + "-" + i}>
            <input
                id={`id-${i}`}
                type={"radio"}
                onChange={onChangeCallback}
                name={name}
                //value={value}
                value={o}
                checked = {value === o}
            />
            <label htmlFor={`id-${i}`} key={name + "-" + i}>
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
