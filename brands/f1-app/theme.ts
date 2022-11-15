import { PrensaEngine } from '@xprog/prensa'
import { colors } from './assets/colors'

export const f1AppAssets = {}

export const f1AppTheme = PrensaEngine.createTheme('f1-app', {
  colors,
  fonts: { primary: 'Open Sans', secondary: 'Viga' },
  space: {'$21': '84px'}
})