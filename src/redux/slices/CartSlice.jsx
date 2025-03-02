import { createSlice } from "@reduxjs/toolkit";

const CartSlice=createSlice({
    name:'cart',
    initialState:{
        cart:[],
    },
    reducers:{
        addToCart:(state,action)=>{
            const existingItems=state.cart.find((item)=>item.id == action.payload.id);
            if(existingItems){
                state.cart=state.cart.map((items)=>items.id == action.payload.id ? {...items,quantity:items.quantity+1} : {...items,quantity:items.quantity});
            }else{
                state.cart.push(action.payload);
            }
        },
        removeToCart:(state,action)=>{
            state.cart=state.cart.filter((item)=>item.id !== action.payload.id);
        },
        incrementQuantity:(state,action)=>{
            state.cart=state.cart.map((item)=>item.id == action.payload.id? {...item,quantity:item.quantity+1} : {...item});
        },
        decrementQuantity:(state,action)=>{
            state.cart=state.cart.map((item)=>item.id == action.payload.id? {...item,quantity:item.quantity-1} : {...item});
        },
    }
})

export const {addToCart,removeToCart,incrementQuantity,decrementQuantity}=CartSlice.actions;
export default CartSlice.reducer;