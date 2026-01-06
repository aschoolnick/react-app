import { TextBlock } from './TextBlock'

export function TextBlockList()
{

    const testArray = ["Cat", "Rabbit", "Hamster", "Dog", "Mouse"];
    return (
        <>
        {testArray.map((element, index) => {
            return (
            <TextBlock text={element} key={index}/>
            )
        })}
        </>
    )
}