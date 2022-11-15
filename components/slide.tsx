import { get } from 'lodash'
import { useContext } from 'react'
import { Block, PageBlock } from '@xprog/prensa'

import { DataContext } from '../providers/Data'

type SlideProps = {
  children: any,
  items?: any[],
  layout: string,
  template: string,
  id?: string
}

const Slide: React.FC<SlideProps> = (props) => {
  const state = useContext(DataContext)
  const layouts = get(state, 'theme.assets.layouts')
  const templates = get(state, 'theme.assets.templates')
  const Item = (p) => <Block {...p?.customProps}>{props.children}</Block>
  return (
    <Block id={props.id}>
      <PageBlock
        itemComponent={Item}
        slotAutoLeftElements={props?.items}
        slotLeftLayout={props?.layout}
        slotTemplate={props?.template}
        slotLayouts={layouts}
        templates={templates}
      />
    </Block>
  )
}

Slide.defaultProps = {
  items: [{ name: 'Nome do Item1' }],
  layout: 'LayoutDefault',
  template: 'Template100'
}

export default Slide