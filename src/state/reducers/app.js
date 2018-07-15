// @flow
import * as actions from '../actions/app'

const initialState = {
  isDrawerOpen: false,
}

export default function(
  state: typeof initialState = initialState,
  action: Object = {}
) {
  const { type, payload } = action
  switch (type) {
    case actions.TOGGLE_DRAWER:
      return { ...state, isDrawerOpen: payload }
    default:
      return state
  }
}
