import React from "react";
import Button from "react-bootstrap/Button";

export default function DebugButton(props) {
    function onClickHandler(){
        console.log("Button has been clicked");
    }
    return (
        <Button variant="primary" onClick={onClickHandler}>Text</Button>
    )
}