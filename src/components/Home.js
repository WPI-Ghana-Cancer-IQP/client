import React from "react";
import Button from "@material-ui/core/Button";

function clickTheButton() {
    alert("Someone clicked my button")
}

function Home() {
    return (
        <>
            <h1>Hello from home</h1>
            <Button onClick={clickTheButton}>Click me</Button>
        </>
    )
}

export default Home;