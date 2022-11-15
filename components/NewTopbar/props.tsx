import { PrensaEngineCSSProp } from '@xprog/prensa/types'


export const logoProps: PrensaEngineCSSProp = {
  align: ['column', 'left', 'top'],
  color: '$Primary200',
  fontFamily: '$secondary',
  fontSize: '40px'
}

export const logoDescriptionProps: PrensaEngineCSSProp = {
  fontFamily: '$primary',
  fontSize: '18px', 
  fontWeight: '300', 
  color: '$Neutral900' 
}
export const menuIconProps: PrensaEngineCSSProp = {
  align: ['row', 'right', 'top'],
  mr: '8px',
  width: '100%',
  '@lg': {
    display: 'none'
  }
}
export const menuItemsProps: PrensaEngineCSSProp = {
  align: ['row', 'between', 'middle'],
  display: 'none',
  '@lg': {
    display: 'flex',
  }
}
export const topBarProps: PrensaEngineCSSProp = {
  backgroundColor: '$Neutral50',
  fontFamily: '$Primary',
  height: '110px',
  width: '100%',
  '@lg': {
    align: ['row', 'evenly', 'middle'],
    height: '100px',
    width: '100%'
  }
}
export const topBarItemsProps: PrensaEngineCSSProp = {
  align: ['row', 'right', 'middle'],
  width: '100%',
  pl: '8px',
  pr: '8px',
  maxWidth: '1280px',
  '@lg': {
    width: 'calc(100% - 176px)'
  }
}