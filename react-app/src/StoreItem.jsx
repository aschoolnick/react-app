export function StoreItem({item}) {
    
    
    return (
        <>
            <h2>{item.title}</h2>
            <p>{item.description} <br/> {item.price}</p>
        </>
    )
}