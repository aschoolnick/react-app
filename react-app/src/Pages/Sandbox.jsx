import { Button } from '../Components/Button'
import { Textbox } from '../Components/Textbox'
import { TextBlockList } from '../Components/TextBlockList'
import { Store } from '../Components/Store'
import { Links } from "../Components/Links"

export function Sandbox() {
    return (
        <>
            <Links />
            <h1>Sandbox</h1>
            <p>Just a sandbox for testing different components.</p>

            <Button color={"#286ab6"}/>
            <Button color={"#E83716"}/>
            <br/><br/>
            <Textbox/>
            <TextBlockList/>
            <br/> <br/>
            <Store />
        </>
    )
}