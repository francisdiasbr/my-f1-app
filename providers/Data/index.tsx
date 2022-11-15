import React from 'react'
import { f1AppAssets } from 'brands/f1-app/theme'
import { get } from 'lodash'

export const actions = {
  SOCKET_STATUS: 'SOCKET/STATUS',
}
const initialState = { status: false }

const getThemeAssets = (themeSelected) => {
  switch(themeSelected) {
    case 'f1app':
      return f1AppAssets
    default:
      return f1AppAssets
  }
}

const reducer = (state, action) => {
  const {type, payload} = action
  switch(type) {
    case actions.SOCKET_STATUS: 
      return {...state, ...payload}
    default:
      return state
  }
}

export const DataContext = React.createContext('')

const DataProvider = (props) => {
  const { children, pageProps, ...otherProps } = props
  const themeSelected = get(pageProps, 'theme.selected', 'f1-app')
  const themeAssets = getThemeAssets(themeSelected)
  const theme = { assets: themeAssets, selected: `${themeSelected}-theme` }
  const initState = {
    ...initialState,
    ...pageProps,
    theme
  }
  const [state] = React.useReducer(reducer, initState)
  return (
    <DataContext.Provider value={state}>
      {React.Children.map(children, (item: any) =>
        React.cloneElement(item, {...otherProps})
      )}
    </DataContext.Provider>
  )
}

export default DataProvider
