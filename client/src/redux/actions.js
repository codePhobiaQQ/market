import {
  ADD_TO_CARD,
  CLOSE_CARD_POPUP,
  FETCH_LATEST_PRODUCTS,
  HIDE_ALERT,
  HIDE_LOADER, HIDE_SING_IN, HIDE_SING_UP,
  OPEN_CARD_POPUP, SHAW_SING_IN, SHAW_SING_UP,
  TOGGLE_ALERT
} from "./types";

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



export function fetchLatestProducts(products) {
  return async dispatch => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=7')
    const json = await response.json()
    dispatch({ type: FETCH_LATEST_PRODUCTS, payload: json })
    setTimeout(() => {
      dispatch({ type: HIDE_LOADER })
    }, 500)

  }
}

export function shawSingIn() {
  return {
    type: SHAW_SING_IN
  }
}
export function hideSingIn() {
  return {
    type: HIDE_SING_IN
  }
}

export function shawSingUp() {
  return {
    type: SHAW_SING_UP
  }
}
export function hideSingUp() {
  return {
    type: HIDE_SING_UP
  }
}