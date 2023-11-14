import { ADD_TO_CART,REMOVE_FROM_CART } from "./constant"



export  const cartData = (data = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            console.warn("ADD_TO_CART condition ", action.item)
            return [action.item, ...data]
        case REMOVE_FROM_CART:
            console.warn("REMOVE_FROM_CART condition ", action.id);
            const remainingItems= data.filter((item)=>(
                item.id!==action.id
            ))
            return [...remainingItems]
                // case EMPTY_CART:
                //     console.warn("EMPTY CART condition ", action);
                //     data =[]
                //     return [...data]
        default:
            return data
    }
}