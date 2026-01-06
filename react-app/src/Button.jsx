export function Button({text, color, notify, message})
{

    return (
        <button onClick={() => notify(message)} style={{backgroundColor: color}}>
            <p>{text}</p>
        </button>
    )
}