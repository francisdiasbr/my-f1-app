import { PrensaEngineCSSProp } from '@xprog/prensa/types'

export type TopbarType = {
  css?: PrensaEngineCSSProp,
  items?: Array<{
    id: string,
    value: string
  }>
}