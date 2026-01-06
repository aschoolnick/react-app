import { StoreItem } from "./StoreItem"

export function Store()
{
    const storeList = [
        { title: "Item 1", description: "This is an item.", price: 50 },
        { title: "Item 2", description: "This is an item also.", price: 100 },
        { title: "Item 3", description: "This is an item as well.", price: 75 }
    ];
    
    return (
        <>
            {storeList.map((item, index) => {
                return (
                    <StoreItem item={item} key={index}/>
                )
            })}
        </>
    )
}