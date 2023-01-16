import { PrensaEngineCSSProp } from '@xprog/prensa/types'
import { PrensaEngine } from '@xprog/prensa'

export const inputItemProps: PrensaEngineCSSProp = {
  mb: '12px',
  mr: '8px',
}
export const inputLabelProps: PrensaEngineCSSProp = {
  color: '#440099', 
  fontSize: '12px', 
  fontWeight: '600', 
  mb: '6px'
}
export const Input = PrensaEngine.styled(
  'input',
  {
    border: '1px solid $Neutral200', 
    color: 'black', 
    borderRadius: '2px', 
  }
)