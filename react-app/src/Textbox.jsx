import { useState } from "react"

export function Textbox() {

    const [text, setText] = useState("");

    function handleEvent(e)
    {
        setText(e.target.value);
    }

    return (
        <>
            <input onChange={(e) => handleEvent(e)}></input>
            <p>{text}</p>
        </>
    )
}