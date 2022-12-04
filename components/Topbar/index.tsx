import { map } from 'lodash'
import React, { useContext } from 'react'
import { Block, Typography } from '@xprog/prensa'
import { PrensaEngineCSSProp } from '@xprog/prensa/types'

import { MenuContext } from '../../providers/Menu'
import { menuItemsData, titleStrings } from './data'
import { MenuItem } from './menuItem'
import { logoProps, logoWrapperProps, logoDescriptionProps, menuIconProps, menuItemsProps, topBarProps, topBarItemsProps, topBarWrapperProps } from './props'

type TopbarProps = {
  css?: PrensaEngineCSSProp
}

const Topbar: React.FC<TopbarProps> = (props) => {
  const { menuProvider }: any = useContext(MenuContext)
  const { menuLeft } = menuProvider

  const handleOpenMenu = () => menuLeft.setState(true)

  return (
    <Block
      className='topBar'
      css={topBarProps}>
      <Block
        className='topBarWrapper'
        css={topBarWrapperProps}>
        <Block
          className='logo'
          css={logoWrapperProps}>
          <Typography
            css={logoProps}>
            {titleStrings.topbarTitle}</Typography>
          <Typography
            css={logoDescriptionProps}>
            {titleStrings.logoDescription}</Typography>
        </Block>
        <Block
          className='topBarItems'
          css={topBarItemsProps}>
          <Block
            className='menuIcon'
            css={menuIconProps}
            onClick={handleOpenMenu}>
            <img src='static/menu-icon.png' height='15px' width='24px' alt='icon' />
          </Block>
          <Block
            className='menuItems'
            css={menuItemsProps}>
            {map(menuItemsData, (item, key) => <MenuItem {...item} key={key} />)}
          </Block>
        </Block>
      </Block>
    </Block>
  )
}

Topbar.defaultProps = {
  css: {
    width: '100%'
  }
}

export default Topbar