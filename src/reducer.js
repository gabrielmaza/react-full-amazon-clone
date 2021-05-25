export const initialState = {
    basket: [], 
};

// Selector
export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {

    switch (action.type) {  
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );            
            let newBasket = [...state.basket];

            if (index >= 0) {
                // El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Cant remove product (id: ${action.id}) as its not in basket!`
                )
            }

            return {
                ...state,
                basket: newBasket
            }

        default:
            return state;
    }
}

export default reducer;