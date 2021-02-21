import feat1 from '../../img/icons/1.png'
import feat2 from '../../img/icons/2.png'
import feat3 from '../../img/icons/3.png'

const initialState = {
  info: [
    {
      img: `${feat1}`,
      text: 'Fast Secure Payment1'
    },
    {
      img: `${feat2}`,
      text: 'Fast Secure Payments2'
    },
    {
      img: `${feat3}`,
      text: 'Fast Secure Payments3'
    },

  ]
}

export const FeatureSectionReducer = (state = initialState, action) => {
  switch (action.type) {
    default: return state
  }
}
