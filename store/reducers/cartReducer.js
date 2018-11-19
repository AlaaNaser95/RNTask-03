import * as actionTypes from "../actions/types"

const initialState = {
  list: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      let check = state.list.find((item) => item.option === action.payload.option && item.drink === action.payload.drink)
      if(check){
        check.quantity++;
      }
      else{
        action.payload.quantity=1
        state.list.push(action.payload)
      }
      return {
        ...state,
      };
    case actionTypes.REMOVE_ITEM:
    return {
      ...state,
      list: state.list.filter((item)=>item!==(action.payload))
    }
    case actionTypes.CHECKOUT:
    return {
      ...state,
      list: []
    }
    default:
      return state;
  }
}
