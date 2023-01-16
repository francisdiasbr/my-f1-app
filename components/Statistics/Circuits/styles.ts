import { PrensaEngineCSSProp } from '@xprog/prensa/types'

export const blockDispositionProps: PrensaEngineCSSProp = {
  align: ['column', 'center', 'top'],
  height: '100%',
  width: '100%',
  '@lg': {
    align: ['row', 'center', 'top']
  }
}

export const inputWrapProps: PrensaEngineCSSProp = {
  align: ['column', 'left', 'middle'],
  backgroundColor: '$basicBlackAlpha400',
  height: '100%',
  mr: '32px',
  width: '30%'
}
export const sectionWrapperProps: PrensaEngineCSSProp = {
  // align: ['column', 'center', 'top'],
  // height: '100%',
  // width: '100%'
}



