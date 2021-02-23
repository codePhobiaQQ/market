import {ADD_TO_CARD, CLOSE_CARD_POPUP, HIDE_ALERT, OPEN_CARD_POPUP, TOGGLE_ALERT} from "./types";

export function addToCard(product) {
  return {
    type: ADD_TO_CARD,
    payload: product || null
  }
}

export function openCardPopup(product) {
  return {
    type: OPEN_CARD_POPUP,
  }
}

export function closeCardPopup() {
  return {
    type: CLOSE_CARD_POPUP,
  }
}

export function hideAlert() {
  return {
    type: HIDE_ALERT
  }
}

export function toggleAlert(text) {
  return dispatch => {
    dispatch({
      type: TOGGLE_ALERT,
      payload: text || null,
    })
    setTimeout(() => {
      dispatch(hideAlert())
    }, 2000)
  }
}