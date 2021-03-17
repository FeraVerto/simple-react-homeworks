import React, {useState} from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {changeThemeC} from "./bll/themeReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";

const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector<AppStoreType>(state => state.theme.theme); // useSelector
    console.log("HW12", theme)
    /*const [value, onChangeTheme] = useState(themes[0]);*/

    let dispatch = useDispatch()
    // useDispatch, onChangeCallback

    let onChangeTheme = (value: any) => {
        dispatch(changeThemeC(value))
    }

    return (
        <div className={s.select_block + " " + s[theme + 'Text'] + " " + s[theme + ""]}>

            <SuperSelect
                options={themes}
                //@ts-ignore
                value={theme}
                onChangeOption={onChangeTheme}
            />
            <div className={s.welcome}>Welcome to Hell!</div>
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

        </div>
    );
}

export default HW12;
