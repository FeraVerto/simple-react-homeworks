import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from "react";
import s from "./SuperSelect.module.css"

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {

    const mappedOptions: any[] = options !== undefined
        ? options.map((t, i) => <option className={s.item} key={i} value={t.name}>{t}</option>)
        : [] //map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        // onChange, onChangeOption
        onChange && onChange(e)
        onChangeOption !== undefined && onChangeOption(e.currentTarget.value)
    }

    return (
        <select className={s.select} onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    );
}

export default SuperSelect;

