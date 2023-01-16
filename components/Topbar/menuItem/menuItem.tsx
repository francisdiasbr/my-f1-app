import { Typography } from "@xprog/prensa"

import { menuItemProps } from "./styles"
import { MenuItemType } from "./types"

export const MenuItem: React.FC<MenuItemType> = ({ id, value }) => {
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

