import React from 'react'
import { f1AppTheme } from '../../brands/f1-app'

const StylesProvider = (props) => {
  return (
    <div className={f1AppTheme.className}>
      {props.children}
    </div>
  )
}

export default StylesProvider