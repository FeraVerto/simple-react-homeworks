import React from "react";
import HW1 from "../../../h1/HW1";
import HW2 from "../../../h2/HW2";
import HW3 from "../../../h3/HW3";
import HW4 from "../../../h4/HW4";
import HW6 from "../../../h6/HW6";
import s from "./PreJunior.module.css"
import HW7 from "../../../h7/HW7";

function PreJunior() {
    return (
        <ul className={s.pre_junior_list}>
            <li className={s.pre_junior_item}><HW1/></li>
            <li className={s.pre_junior_item}><HW2/></li>
            <li className={s.pre_junior_item}><HW3/></li>
            <li className={s.pre_junior_item}><HW4/></li>
            <li className={s.pre_junior_item}><HW6/></li>
        </ul>
    );
}

export default PreJunior;

// сделайте по аналогии пустые страницы джун и джун+
// туда будут добавляться следующие дз