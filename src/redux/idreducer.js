import { ADD_ID,REMOVE_ID } from "./constant"

export  const idData = (data = [], action) => {
    switch (action.type) {
        case ADD_ID:
            console.warn("ADD_TO_CART condition ", action.id)
            return [action.id, ...data]
        case REMOVE_ID:
            console.warn("REMOVE_FROM_CART condition ", action.id);
            const remainingItems= data.filter((item)=>(
                item!==action.id
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