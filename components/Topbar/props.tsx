import { PrensaEngineCSSProp } from '@xprog/prensa/types'


export const logoWrapperProps: PrensaEngineCSSProp = {
  align: ['column', 'left', 'top'],
  width: '550px'
}
export const logoProps: PrensaEngineCSSProp = {
  color: '$Primary200',
  fontFamily: '$secondary',
  fontSize: '40px'
}
export const logoDescriptionProps: PrensaEngineCSSProp = {
  color: '$Neutral900',
  fontFamily: '$primary',
  fontSize: '18px', 
  fontWeight: '300', 
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
export const topBarItemsProps: PrensaEngineCSSProp = {
  align: ['row', 'right', 'middle'],
  width: '100%',
}
export const topBarProps: PrensaEngineCSSProp = {
  backgroundColor: '$Neutral50',
  height: '110px',
  align: ['row', 'center', 'middle'],
  width: '100%'
}
export const topBarWrapperProps: PrensaEngineCSSProp = {
  width: 'calc(100% - 32px)',
  '@lg': {
    align: ['row', 'evenly', 'middle'],
  }
}