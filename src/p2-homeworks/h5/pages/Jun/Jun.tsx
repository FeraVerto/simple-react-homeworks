import React from "react";
import s from "../Jun/Jun.module.css";
import HW7 from "../../../h7/HW7";
import HW8 from "../../../h8/HW8";
import HW9 from "../../../h9/HW9";
import HW10 from "../../../h10/HW10";
import HW11 from "../../../h11/HW11";
import HW12 from "../../../h12/HW12";

function Jun() {
    return (
        <div>
            <ul className={s.pre_junior_list}>
                <li className={s.pre_junior_item}><HW7/></li>
                <li className={s.pre_junior_item}><HW8/></li>
                <li className={s.pre_junior_item}><HW9/></li>
                <li className={s.pre_junior_item}><HW10/></li>
                <li className={s.pre_junior_item}><HW11/></li>
            </ul>
        </div>
    );
}

export default Jun;

// сделайте по аналогии пустые страницы джун и джун+
// туда будут добавляться следующие дз