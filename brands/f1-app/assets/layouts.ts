import { PageBlockTypes as t } from '@xprog/prensa/types'

const LayoutDefault: t.SlotConfigProps = {
  css: {
    column: {
      align: ['row', 'center', 'top'],
      width: '100%'
    }
  }
}

export const layouts = { LayoutDefault }
export const layoutsKeys = Object.keys(layouts)
export type LayoutsType = typeof layoutsKeys