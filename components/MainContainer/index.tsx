import { Block } from '@xprog/prensa'
import React, {PropsWithChildren} from 'react';

import Topbar from 'components/Topbar'
import {contentWrapperProps, homeContainerProps, widthWrapperProps} from './styles'

const MainContainer = ({children}: PropsWithChildren) => {
  return (
    <Block css={homeContainerProps}>
      <Block css={widthWrapperProps}>
        <Topbar />
        <Block css={contentWrapperProps}>{children}</Block>
      </Block>
    </Block>
  )
}

export default MainContainer