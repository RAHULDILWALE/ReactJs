import { connect } from "react-redux";


const cartReducer = (state =[], action) => {
    switch (action.type) {

    case 'ADD_TO_CART':
    
    console.log("cart " + action.post)
    console.log( [...state,action.post])
    return  [...state,action.post]

     
    case 'Remove_From_Cart':
        console.log(state)
        console.log(action.id)
        var x=  state.filter((post)=>post.id !==action.id)
        return x

    

   
    default:
    return state;
    }
    }
    export default cartReducer;