import {HIDE_ALERT, TOGGLE_ALERT} from "../types";

const initialState = {
  alertPopup: {
    visible: false,
    text: 'Уведомление'
  }
}

export const GlobalElementsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ALERT:

      const changeSettings = state.alertPopup
      changeSettings.visible = true
      changeSettings.text = action.payload

      return {...state, alertPopup:  changeSettings}
    case HIDE_ALERT:
      const defaultState = {visible: false, text: 'Уведомление'}
      return {...state, alertPopup: defaultState}

    default: return state
  }
}
