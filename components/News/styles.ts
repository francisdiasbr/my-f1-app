import { PrensaEngineCSSProp } from '@xprog/prensa/types'

export const newsContainerProps: PrensaEngineCSSProp = {
  width: '700px',
}
export const newsBlockWrapperProps: PrensaEngineCSSProp = {
  align: ['row', 'center', 'top'],
  backgroundColor: '$Neutral100',
  borderRadius: '6px',
  mb: '20px',
  width: '100%',
}
export const newsContentProps: PrensaEngineCSSProp = {
  align: ['column', 'center', 'top'],
  paddingLeft: '16px',
  px: '12px',
}
export const newsTitleProps: PrensaEngineCSSProp = {
  align: ['row', 'left', 'top'],
  color: '$Text100',
  fontFamily: '$primary',
  fontSize: '18px',
  fontWeight: '400',
  lineHeight: '22px',
  mb: '2px',
  width: '100%'
}
export const newsPreviewProps: PrensaEngineCSSProp = {
  color: '$Text100',
  fontFamily: '$primary',
  fontSize: '16px',
  fontWeight: '300',
  lineHeight: '22px',
  mb: '2px',
}
export const newsInfoProps: PrensaEngineCSSProp = {
  align: ['row', 'left', 'top'],
  color: '#757575',
  fontFamily: '$primary',
  fontSize: '14px',
  fontWeight: '300',
  lineHeight: '22px',
  width: '100%',
}
export const newsAuthorProps: PrensaEngineCSSProp = {
  mr: '8px',
}