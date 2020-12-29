import React, {ChangeEvent, useState} from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";
import s from "./HW11.module.css"
import {log} from "util";

function HW11() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(100);
    const [value, setValue] = useState<[number, number]>([value1, value2]);

    return (
        <div className={s.range}>q
            {/*should work (должно работать)*/}
            <div>
                <span className={s.value1}>{value1}</span>
                <SuperRange
                    onChangeRange={(value1) => setValue1(value1)}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <span className={s.range1}>{value1}</span>

                <span>{value2}</span>
            </div>

            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}

        </div>
    );
}

export default HW11;

