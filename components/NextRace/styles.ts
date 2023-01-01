import { PrensaEngineCSSProp } from "@xprog/prensa/types";

export const nextRaceContainerProps: PrensaEngineCSSProp = {
  flexDirection: 'row',
  display: 'flex',
  backgroundColor: '$Neutral100',
  height: '190px',
  borderRadius: '4px',
  p: '10px',
  width: 'auto',
  '@lg': {
    width: '700px',
  }
}
export const leftContainerProps: PrensaEngineCSSProp = {
  width: '100%',
  align: ['column', 'left', 'top'],
}
export const leftContainerTitleProps: PrensaEngineCSSProp = {
  fontFamily: '$primary',
  fontSize: '12px',
  fontWeight: '300',
  color: '$Text100',
}
export const rightContainerProps: PrensaEngineCSSProp = {
  align: ['column', 'center', 'between'],
  width: '100%'
}
export const rightContainerTopProps: PrensaEngineCSSProp = {
  height: 'auto',
  align: ['row', 'center', 'top'],
}
export const rightContainerBottomProps: PrensaEngineCSSProp = {
  align: ['column', 'center', 'bottom'],
  display: 'flex',
  width: '100%'
}
export const bottomTextProps: PrensaEngineCSSProp = {
  fontFamily: '$primary',
  fontSize: '12px',
  fontWeight: '300',
  color: '$Text100',
}
export const grandprixProps: PrensaEngineCSSProp = {
  fontFamily: '$primary',
  fontSize: '24px',
  mt: '2px',
}
export const venueProps: PrensaEngineCSSProp = {
  fontFamily: '$primary',
  fontSize: '14px',
  fontWeight: '300'
}
export const scheduleSlotProps: PrensaEngineCSSProp = {
  align: ['column', 'center', 'top'],
  minWidth: '91px'
}
export const slotTitleProps: PrensaEngineCSSProp = {
  fontFamily: '$primary',
  fontSize: '12px',
  fontWeight: '300',
  mb: '2px',
}
export const slotTimeProps: PrensaEngineCSSProp = {
  fontFamily: '$primary',
  fontSize: '24px',
}
export const slotDayProps: PrensaEngineCSSProp = {
  fontFamily: '$primary',
  fontSize: '14px',
  fontWeight: '300',
  mb: '8px',
}