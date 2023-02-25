import { map } from 'lodash'
import React, { useContext } from 'react'
import { Block, Typography } from '@xprog/prensa'
import CloseIcon from '@mui/icons-material/Close';

import { MenuContext } from '../../providers/Menu'
import { titleStrings } from './data'
import { MenuItem } from './menuItem/menuItem'
import { logoProps, logoWrapperProps, logoDescriptionProps, menuIconProps, menuItemsProps, topBarProps, topBarItemsProps, topBarWrapperProps } from './styles'
import { TopbarType } from './types'


const Topbar: React.FC<TopbarType> = ({ items }) => {
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
            {titleStrings.topbarTitle}
          </Typography>
          <Typography
            css={logoDescriptionProps}>
            {titleStrings.logoDescription}
          </Typography>
        </Block>
        <Block
          className='topBarItems'
          css={topBarItemsProps}>
          <Block
            className='menuIcon'
            css={menuIconProps}
            onClick={handleOpenMenu}
          >
            <CloseIcon />
          </Block>
          <Block
            className='menuItems'
            css={menuItemsProps}>
            {map(items, (item, key) =>
              <MenuItem {...item} key={key} />
            )}
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