import React from "react";
import {Button} from "./SharedComponents";

export const ContentB = () => {
    return(
        <section>
            <h1>Content B</h1>
            <h2>This is my Content B button</h2>
            <Button onClick={() => alert("Button B clicked!")} label = "Button B"/>
        </section>
    )
}