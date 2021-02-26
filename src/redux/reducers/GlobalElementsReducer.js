import {HIDE_ALERT, HIDE_SING_IN, HIDE_SING_UP, SHAW_SING_IN, SHAW_SING_UP, TOGGLE_ALERT} from "../types";

const initialState = {
  alertPopup: {
    visible: false,
    text: 'Уведомление'
  },
  logInPopup: {
    visible: false
  },
  singInPopup: {
    visible: false
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

    case SHAW_SING_IN:
      const prevStateIn = state.logInPopup
      prevStateIn.visible = true
      return {...state, logInPopup: prevStateIn}
    case HIDE_SING_IN:
      const prevStateOut = state.logInPopup
      prevStateOut.visible = false
      return {...state, logInPopup: prevStateOut}


    case SHAW_SING_UP:
      const singUpIn = state.singInPopup
      singUpIn.visible = true
      return {...state, singUpPopup: singUpIn}
    case HIDE_SING_UP:
      const singUpOut = state.singUpPopup
      singUpOut.visible = false
      return {...state, singUpPopup: singUpOut}


    default: return state
  }
}
