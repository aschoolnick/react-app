import { useState, useEffect} from "react"

export function ButtonShowHide({color, show, setShow})
{

    return (
        <button onClick={() => setShow(!show)} style={{backgroundColor: color}}>
            <p>{show ? "Hide Items" : "Show Items"}</p>
        </button>
    )
}