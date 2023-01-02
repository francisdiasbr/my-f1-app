import { PrensaEngineCSSProp } from '@xprog/prensa/types'


export const logoWrapperProps: PrensaEngineCSSProp = {
  align: ['column', 'left', 'top'],
  width: '550px'
}
export const logoProps: PrensaEngineCSSProp = {
  color: '$Primary',
  fontFamily: '$secondary',
  fontSize: '30px'
}
export const logoDescriptionProps: PrensaEngineCSSProp = {
  color: '$Neutral900',
  fontFamily: '$primary',
  fontSize: '16px', 
  fontWeight: '300', 
}
export const menuIconProps: PrensaEngineCSSProp = {
  align: ['row', 'right', 'top'],
  mr: '6px',
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
  align: ['row', 'center', 'middle'],
  backdropFilter: 'blur(4px)',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  boxShadow: 'rgb(0 0 0 / 16%) 0px 0px 24px',
  height: '100px',
  position: 'fixed',
  width: '100%',
}
export const topBarWrapperProps: PrensaEngineCSSProp = {
  width: '1280px',
  '@lg': {
    align: ['row', 'evenly', 'middle'],
  }
}