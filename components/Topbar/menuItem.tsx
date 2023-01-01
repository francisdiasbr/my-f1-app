import { Typography } from "@xprog/prensa"
import { PrensaEngineCSSProp } from '@xprog/prensa/types'


export type MenuItemProps = {
  id: string,
  value: string
}

export const MenuItem: React.FC<MenuItemProps> = ({ id, value }) => {
  const menuItemProps: PrensaEngineCSSProp = {
    fontSize: '12px',
    fontWeight: '600',
    ml: '30px',
    my: '0'
  }
  return (
    <a href={`#${id}`}>
      <Typography
        css={menuItemProps}
        variant="menuItem-default">
        {value}
      </Typography>
    </a>
  )
}

