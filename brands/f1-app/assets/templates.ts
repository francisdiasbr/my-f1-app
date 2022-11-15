import { PageBlockTypes as t } from '@xprog/prensa/types'

const TemplateNeutral: t.PageBlockProps = {
  css: {
    container: {
      backgroundColor: '$Primary100',
      color: '$Primary100',
      width: '100%',
      p: '0',
      m: '0'
    },
    columnHolder: {
      '@lg': {
        maxWidth: '1280px',
        width: 'calc(100% - $8)'
      },
      '.Column:nth-child(2)': { display: 'none' },
      '.Column:nth-child(3)': { display: 'none' },
    }
  },
  customProps: {
    item: {
      className: 'Item',
      css: {
        align: ['column', 'left', 'top'],
        width: '100%'
      }
    }
  }
}

const TemplateWhite: t.PageBlockProps = {
  css: {
    container: {
      backgroundColor: '$neutral50',
      color: '$basicBlack',
      width: '100%',
      p: '0',
      m: '0'
    },
    columnHolder: {
      '@lg': {
        maxWidth: '1280px',
        width: 'calc(100% - $8)'
      },
      '.Column:nth-child(2)': { display: 'none' },
      '.Column:nth-child(3)': { display: 'none' },
    }
  },
  customProps: {
    item: {
      className: 'Item',
      css: {
        align: ['column', 'left', 'top'],
        width: '100%'
      }
    }
  }
}

export const templates = { TemplateNeutral, TemplateWhite }
export const templatesKeys = Object.keys(templates)
export type TemplatesType = typeof templatesKeys