import { Typography } from "@xprog/prensa"

import { menuItemProps } from "./styles"
import { MenuItemType } from "./types"

export const MenuItem: React.FC<MenuItemType> = ({ id, href, value }) => {
  return (
    <div>
      <a href={href}>
        <Typography
          css={menuItemProps}
          variant="menuItem-default">
          {value}
        </Typography>
      </a>
    </div>
  )
}

