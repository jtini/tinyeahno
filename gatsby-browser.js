// @flow
import React from 'react'
import { Provider } from 'react-redux'

import createStore from './src/state/createStore'

// export const wrapRootElement = ({ history }: any) => {
//   const store = createStore()

//   const ConnectedRouterWrapper = ({ children }: any) => (
//     <Provider store={store}>
//       <Router history={history}>{children}</Router>
//     </Provider>
//   )

//   return ConnectedRouterWrapper
// }

export const wrapRootElement = ({ element }: any) => {
  const store = createStore()
  const ConnectedRootElement = (
    <Provider store={store}>
      {element}
    </Provider>
  )

  return ConnectedRootElement
}
