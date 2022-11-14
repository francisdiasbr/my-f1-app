import React, { useContext } from 'react'
import { Block, Typography } from '@xprog/prensa'
import { PrensaEngineCSSProp } from '@xprog/prensa/types'
import { MenuContext } from '../../providers/Menu'

type NewTopbarProps = {
  css?: PrensaEngineCSSProp
}

const NewTopbar: React.FC<NewTopbarProps> = (props) => {
  const { menuProvider }: any = useContext(MenuContext)
  const { menuLeft } = menuProvider
  const topBarProps: PrensaEngineCSSProp = {
    align: ['row', 'center', 'top'],
    color: '$basicWhite',
    height: '110px',
    width: '100%',
    pt: '32px',
    position: 'absolute',
    zIndex: '10',
    '@lg': {
      align: ['row', 'center', 'top'],
      height: '100px',
      width: '100%'
    }
  }
  const topBarWrapProps: PrensaEngineCSSProp = {
    align: ['row', 'between', 'top'],
    width: '100%',
    pl: '8px',
    pr: '8px',
    '@lg': {
      maxWidth: '1280px',
      width: 'calc(100% - 176px)'
    }
  }
  const menuButtonProps: PrensaEngineCSSProp = {
    align: ['row', 'right', 'top'],
    mr: '8px',
    width: '100%',
    '@lg': {
      display: 'none'
    }
  }
  const menuItemProps: PrensaEngineCSSProp = {
    fontFamily: '$Tertiary',
    fontSize: '18px',
    filter: 'drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.3));',
    ml: '48px',
    my: '0'
  }
  const menuItemsProps: PrensaEngineCSSProp = {
    align: ['row', 'between', 'top'],
    display: 'none',
    '@lg': {
      display: 'flex',
    }
  }

  const handleOpenMenu = () => menuLeft.setState(true)

  return (
    <Block
      className='topBar'
      css={topBarProps}>
      <Block
        className='topBarWrap'
        css={topBarWrapProps}>
        <Block
          className='menuIcon'
          css={menuButtonProps}
          onClick={handleOpenMenu}>
          <img src='static/menu-icon.png' height='15px' width='24px' alt='icon'/>
        </Block>
        <Block
          className='menuItems'
          css={menuItemsProps}>
            <a href='#emalta'>
              <Typography
                css={menuItemProps}
                variant="menuItem-default">
                Em alta
              </Typography>
            </a>
            <a href='#graficos'>
              <Typography
                css={menuItemProps}
                variant="menuItem-default">
                Gráficos
              </Typography>
            </a>
            <a href='#apostas'>
              <Typography
                css={menuItemProps}
                variant="menuItem-default" >
                Apostas
              </Typography>
            </a>
            <a href='#estatisticas'>
              <Typography
                css={menuItemProps}
                variant="menuItem-default" >
                Estatísticas
              </Typography>
            </a>
            <a href='#circuitos'>
              <Typography
                css={menuItemProps}
                variant="menuItem-default" >
                Circuitos
              </Typography>
            </a>
        </Block>
      </Block>
    </Block>
  )
}

NewTopbar.defaultProps = {
  css: {
    width: '100%'
  }
}

export default NewTopbar