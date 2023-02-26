import { PrensaEngineCSSProp } from "@xprog/prensa/types";

export const calendarContainerProps: PrensaEngineCSSProp = {
  flexDirection: 'row',
  display: 'flex',
  backgroundColor: '$Neutral100',
  height: 'auto',
  borderRadius: '4px',
  p: '10px',
  mt: '120px',
  width: 'auto',
  '@lg': {
    flexDirection: 'column',
    width: '540px',
    overflowY: 'auto',
    maxHeight: '500px',
    m: '8px'
  }
}

export const infoProps: PrensaEngineCSSProp = {
  fontFamily: '$primary',
  fontSize: '12px',
  fontWeight: '300',
  color: '$Text100',
}

export const itemProps: PrensaEngineCSSProp = {
  align: ['column', 'left', 'top'],
  mb: '12px',
}
export const alignTopProps: PrensaEngineCSSProp = {
  align: ['column', 'left', 'top'],
  mb: '16px',
}
export const alignItemsProps: PrensaEngineCSSProp = {
  align: ['column', 'left', 'top'],
  ml: '80px',
}

export const titleProps: PrensaEngineCSSProp = {
  fontFamily: '$primary',
  fontSize: '24px',
  mt: '2px',
}

export const raceTitleProps: PrensaEngineCSSProp = {
  ...titleProps,
  fontSize: '24px'
}
export const raceDateProps: PrensaEngineCSSProp = {
  ...titleProps,
  fontSize: '20px'
}
export const raceCityProps: PrensaEngineCSSProp = {
  ...titleProps,
  fontSize: '20px'
}