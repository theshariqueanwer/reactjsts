import { createContext, useReducer } from "react";

const MealCartContext = createContext({
    items: [],
    addMealItem: (item) => {},
    removeMealItem: (id) => {},
});

function mealCartReducer(state, action) {
    if(action.type === 'ADD_MEAL_ITEM') {
        // ... update the state to add the meal item
        // state.items.push(action.item); // there is problem with this way
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);

        const updatedItems = [...state.items];
       
        if (existingCartItemIndex > -1){
            const existingItem = state.items[existingCartItemIndex];
            const updatedItem = {
                // ...state.items[existingCartItemIndex],
                // quantity: state.items[existingCartItemIndex].quantity + 1,

                ...existingItem,
                quantity: existingItem.quantity + 1,

                // ...updatedItems[existingCartItemIndex],
                // quantity: updatedItems[existingCartItemIndex].quantity + 1,
            };
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            // updatedItems.push(action.item);
            updatedItems.push({...action.item, quantity: 1});
        }

        return { ...state, items: updatedItems };
    }
    if(action.type === 'REMOVE_ITEM') {
        // ... update the state to remove the meal item
        const existingCartItemIndex = state.items.findIndex(item => item.id = action.id);
        const existingCartItem = state.items[existingCartItemIndex];

        const updatedItems = [...state.items];
        if(existingCartItem.quantity === 1) {
            updatedItems.splice(existingCartItemIndex, 1);
        } else {
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity - 1,
            }
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return { ...state, items: updatedItems}
    }

    return state;
}


export function MealCartContextProvider({children}) {
    const [cart, dispatchCartAction] = useReducer(mealCartReducer, { items: [] });

    // function addItemAction() {}
    // function removeItemAction() {}

    // function addItem(item) {
    //     dispatchCartAction({type: 'ADD_ITEM', item})
    // }
    // function removeItem(id) {
    //     dispatchCartAction({type: 'REMOVE_ITEM', id})
    // }

    function addItem(item) {
        dispatchCartAction({type: 'ADD_ITEM', item: item})
    }
    function removeItem(id) {
        dispatchCartAction({type: 'REMOVE_ITEM', id: id})
    }

    // cartContext = {
    //     items: cart.items,
    //     // addItem: (item) => dispatchCartAction({ type: 'ADD_ITEM', item }),
    //     // removeItem: (id) => dispatchCartAction({ type: 'REMOVE_ITEM', item: id }),
    //     addItem: addItem,
    //     removeItem: removeItem,
    // }

    const mealCartContext = {
        items: cart.items,
        addItem,
        removeItem
    }

    return <MealCartContext.Provider value={mealCartContext} >{children}</MealCartContext.Provider>
}


export default MealCartContext;


// ----------------------------------------------------------------------------------------------


// import { createContext, useState } from "react";


// const DataContext = createContext({
//     deliveryType: "",
//     paymentType: "",
//     addData: () => {},
//     removeData: () => {}
// });



// export function DataContextProvider({ children }) {

//     const [data, setData] = useState({})

//     function addData(data) {
//         setData({...data });
//     }
//     function removeData() {
//         setData({});
//     }

//     const dataCtx = {
//         deliveryType: "",
//         paymentType: "",
//         addData,
//         removeData
//     }

//     return (
//         <DataContext.Provider value={{}}>
//             {children}
//         </DataContext.Provider>
//     )
// }