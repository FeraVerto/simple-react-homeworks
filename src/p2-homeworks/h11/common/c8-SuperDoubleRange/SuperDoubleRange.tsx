import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from "react";
import {Slider} from "@material-ui/core";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;


type SuperDoubleRangePropsType = DefaultInputPropsType & {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    min: number
    max: number
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChange,
        onChangeRange, value, min, max
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    const onChangeCallback1 = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e);
        value && onChangeRange && onChangeRange([+e.currentTarget.value, value[1]]);
    }

    const onChangeCallback2 = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e);
        value && onChangeRange && onChangeRange([value[0], +e.currentTarget.value]);
    }

    return (
        <>
            {/*<Slider
                value={value}
                min={min}
                max={max}
                //@ts-ignore
                onChange={onChangeCallback1}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
            />*/}

            <input
                type={"range"}
                value={value}
                onChange={onChangeCallback1}
            />
        </>
    );
}

export default SuperDoubleRange;
