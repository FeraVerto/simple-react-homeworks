import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from "./Clock.module.css"

function Clock() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<Date>();
    const [show, setShow] = useState<boolean>(false);

    const stop = () => {
        clearInterval(timerId)
    }

    const start = () => {
        stop();
        const id: number = window.setInterval(() => {
            setDate(new Date)
        }, 1000);
        setTimerId(id);

    }

    const onMouseEnter = () => {
        setShow(true)
    };
    const onMouseLeave = () => {
        setShow(false)
    };

    //функция, приводящая число к виду 0Х
    let converterDate = (date: number): string => {
        return date < 10 || date === 0 ? '0' + date : '' + date
    }

    const stringTime = date !== undefined &&
        converterDate(date?.getHours())
        + ":" + converterDate(date?.getMinutes())
        + ":" + converterDate(date?.getSeconds()); // fix with date

    const stringDate = date !== undefined &&
        converterDate(date?.getDate())
        + ":" + converterDate(date?.getMonth())
        + ":" + date?.getFullYear(); // fix with date

    return (
        <div className={s.clock}>
            <div className={s.clock_date}>
                <div
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    className={s.string_time}
                >
                    {stringTime}
                </div>

                {show && (
                    <div className={s.string_date}>
                        {stringDate}
                    </div>
                )}

            </div>

            <div className={s.button_clock}>
                <SuperButton onClick={start}>start</SuperButton>
                <SuperButton onClick={stop}>stop</SuperButton>
            </div>
        </div>
    );
}

export default Clock;
