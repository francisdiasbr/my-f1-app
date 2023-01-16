import { Block } from '@xprog/prensa'
import React, {PropsWithChildren} from 'react';

import Topbar from 'components/Topbar'
import {contentWrapperProps, widthWrapperProps} from './styles'
import { menuAdminItemsData } from '../Topbar/data'

const AdminContainer = ({children}: PropsWithChildren) => {
  return (
      <Block css={widthWrapperProps}>
        <Topbar items={menuAdminItemsData} />
        <Block css={contentWrapperProps}>{children}</Block>
      </Block>
  )
}

export default AdminContainer