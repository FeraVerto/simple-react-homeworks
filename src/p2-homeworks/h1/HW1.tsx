import React from "react";
import Message from "./Message";
import "./HW1.css"


function HW1() {

    const messageData = {
        avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
        name: "Афанасий",
        message: "React-Redux знать будешь круто!!!",
        time: "02:15",
    };

    return (
        <div className="hw1_block">
            {/*<hr/>
            homeworks 1*/}

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

           {/* <hr/>
            для личного творчества, могу проверить
            <AlternativeMessage/>
            <hr/>*/}
        </div>
    );
}

export default HW1;
