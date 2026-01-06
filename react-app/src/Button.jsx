export function Button(props)
{

    return (
        <button onClick={() => props.notify(props.message)} style={{backgroundColor: props.color}}>
            <p>{props.text}</p>
        </button>
    )
}