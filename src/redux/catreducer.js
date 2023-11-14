import { ADD_CATEGORY } from "./constant"



export  const catData = (data = "all", action) => {
    switch (action.type) {
        case ADD_CATEGORY:
            console.warn("ADD_TO_CART condition ", action.id)
            return action.id
        default:
            return data
    }
}