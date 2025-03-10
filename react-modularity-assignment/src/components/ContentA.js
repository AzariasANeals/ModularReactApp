import React from "react";
import {Button} from "./SharedComponents";

export const ContentA = () => {
    return(
        <section>        
        <h1>Content A</h1>
        <h2>This is my Content A button</h2>
        <Button onClick={() => alert("Content A Button Clicked!")} label="Button A" />
        </section>

    );
}