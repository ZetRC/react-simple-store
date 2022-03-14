
export const addProduct = (content) =>{
    return{
        type:"ADD_PRODUCT",
        payload:content,
    }
}

export const removeProduct = (content) =>{
    return{
        type:"REMOVE_PRODUCT",
        payload:content,
    }
}