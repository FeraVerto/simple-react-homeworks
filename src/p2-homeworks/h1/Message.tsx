import React from "react";
import s from './Message.module.css';

type HW1PropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: HW1PropsType) {
    return (
        <div className={s.message}>
            <div className={s.avatar}>
                <img src={props.avatar} alt=""/>
            </div>
            <div className={s.block}>
                <div className={s.concave}>
                    <div className={s.left_concave}></div>
                </div>
                <div className={s.text_block}>
                    <div className={s.name}>{props.name}</div>
                    <div className={s.message_text}>{props.message}</div>
                    <div className={s.time}>{props.time}</div>
                </div>



            </div>

        </div>
    );
}

export default Message;
