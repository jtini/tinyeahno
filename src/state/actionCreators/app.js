// @flow
import * as actions from '../actions/app'

export default function toggleDrawer(open: boolean) {
  return { type: actions.TOGGLE_DRAWER, payload: open }
}
