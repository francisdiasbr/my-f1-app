import { createStyles, makeStyles } from '@material-ui/core/styles'
import { PrensaEngine } from '@xprog/prensa'

import {colors} from './assets/colors'

export const f1AppTheme = PrensaEngine.createTheme('f1-app', {
  colors,
  font: { 
    primary: 'Roboto',
    secondary: 'Viga',
    tertiary: 'Public Sans',
    quaternary: 'Open Sans', 
  },
  space: {'$21': '84px'}
})

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      fontFamily: f1AppTheme.font.primary.value,
    },
    primary: {
      color: f1AppTheme.colors.Primary.toString(),
      fontFamily: f1AppTheme.font.primary.value,
    },
    secondary: {
      color: f1AppTheme.colors.SecondaryLight.toString(),
    },
    error: {
      color: f1AppTheme.colors.RedError.toString(),
    },
    warning: {
      color: f1AppTheme.colors.OrangeWarning.toString(),
    },
    success: {
      color: f1AppTheme.colors.GreenSuccess.toString(),
    },
    text: {
      primary: f1AppTheme.colors.Neutral900,
      secondary: f1AppTheme.colors.Neutral600,
      disabled: f1AppTheme.colors.Neutral300,
      hint: f1AppTheme.colors.Neutral400,
    },
    action: {
      hover: f1AppTheme.colors.LightBlue,
    },
  })
)

