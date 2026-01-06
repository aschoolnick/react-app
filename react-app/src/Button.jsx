export function Button()
{
    let number = 100;
    let output = number >= 100 ? "Big Number" : "Small Number";

    return (
        <button>
            <p>{output}</p>
        </button>
    )
}