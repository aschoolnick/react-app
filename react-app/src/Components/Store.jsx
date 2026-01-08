import { useState } from "react"
import { StoreItem } from "./StoreItem"
import { ButtonShowHide } from "./ButtonShowHide"

export function Store()
{
    const storeList = [
        { title: "Item 1", description: "This is an item.", price: 50 },
        { title: "Item 2", description: "This is an item also.", price: 100 },
        { title: "Item 3", description: "This is an item as well.", price: 75 }
    ];

    const [showItem, setShowItem] = useState(false);
    
    return (
        <>
            <ButtonShowHide showItem={showItem} setShowItem={setShowItem} color={"#286ab6"}/>
            
            {showItem ? storeList.map((item, index) => {
                return (
                    <StoreItem item={item} key={index}/>
                )
            }) : <></>}
            {/* Can also be written as {showItem && <ComponentToRender/>} */}
            {
                /* We can also render via a function instead

                function ShowItems({show}) {
                    if(show) {
                        return (....)
                    }
                } 
                 
                <ShowItems show={showItem} />
                
                */
            }
        </>
    )
}