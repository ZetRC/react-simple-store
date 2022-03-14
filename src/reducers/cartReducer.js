const cartReducer = (state=[], action) =>{
    switch(action.type){
        case "ADD_PRODUCT":
            let tempcart = state.filter((item) => item.id === action.payload.id);
            if (tempcart < 1) {
              return [...state, action.payload];
            } else {
              alert("el producto ya fué añadido al carrito")
              return state;
            };
        case "REMOVE_PRODUCT":
            return state.filter((item) => item.id !== action.payload.id);
        default:
            return state;
    }
}

export default cartReducer;