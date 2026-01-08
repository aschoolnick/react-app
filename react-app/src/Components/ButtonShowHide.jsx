import { useState, useEffect} from "react"

export function ButtonShowHide({color, showItem, setShowItem})
{

    return (
        <button onClick={() => setShowItem(!showItem)} style={{backgroundColor: color}}>
            <p>{showItem ? "Hide Items" : "Show Items"}</p>
        </button>
    )
}