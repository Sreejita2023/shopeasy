import { ADD_TO_CART,REMOVE_FROM_CART,REMOVE_ID,ADD_ID,ADD_CATEGORY } from "./constant";

export const addToCart = (item) => {
    console.warn(" add to cart action is called", item)
    return {
        type: ADD_TO_CART,
        item
    }
}

export const removefromCart = (id) => {
    console.warn("action is called", id)
    return {
        type:REMOVE_FROM_CART,
        id
    }
}
export const removeid = (id) => {
    console.warn("remove action is called", id)
    return {
        type:REMOVE_ID,
        id
    }
}
export const addid = (id) => {
    console.warn("add action is called", id)
    return {
        type:ADD_ID,
        id
    }
}
export const addcategory = (id) => {
    console.warn("add action is called", id)
    return {
        type:ADD_CATEGORY,
        id
    }
}
