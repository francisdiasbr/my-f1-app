import { PrensaEngineCSSProp } from '@xprog/prensa/types'
import { PrensaEngine } from '@xprog/prensa'

export const inputItemProps: PrensaEngineCSSProp = {
  mb: '12px'
}
export const inputLabelProps: PrensaEngineCSSProp = {
  color: '$Neutral900', 
  fontFamily: '$primary',
  fontSize: '18px', 
  fontWeight: '300', 
  mb: '12px'
}

export const Input = PrensaEngine.styled(
  'input',
  {
    border: '1px solid', 
    borderColor: '$Neutral300', 
    borderRadius: '4px', 
    fontFamily: '$primary',
    height: '18px'
  }
)