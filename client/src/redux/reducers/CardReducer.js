import {ADD_TO_CARD, CLOSE_CARD_POPUP, OPEN_CARD_POPUP} from "../types";

const initialState = {
  products: [],
  amount: 0,
  isOpened: false,
  totalPrice: 0
}

export const CardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CARD:
      // console.log('amount', action.payload.props)
      // console.log(state.products)
      return {...state, amount: state.amount + 1, products: state.products.concat(action.payload.props)}
    case OPEN_CARD_POPUP:
      return {...state, isOpened: true}
    case CLOSE_CARD_POPUP:
      return {...state, isOpened: false}
    default: return state
  }
}
