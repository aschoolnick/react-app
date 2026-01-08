import { useState, useEffect} from "react"

export function Button({color})
{
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Page just rendered");
    }, [])

    useEffect(() => {
        console.log("Count is now equal to: " + count);
    }, [count]);

    return (
        <button onClick={() => setCount(count + 1)} style={{backgroundColor: color}}>
            <p>{count}</p>
        </button>
    )
}