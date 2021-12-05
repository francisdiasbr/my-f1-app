import { Block } from 'prensa'
import styled from "styled-components"

export const PageTitleStyled = styled.h1`
  font-size: 16px;
  color: maroon;
`

const PageTitle = () => {
	return (
		<Block
			alignx='center'
			aligny='middle'
			bgColor='primary'
			height='50px'
			mb={2}
			pl={1}
			pr={1}
			pt='0px'
			pb='0px'
			width='calc(100% - 16px)'>
			<PageTitleStyled>F1 Stats 2021</PageTitleStyled>
		</Block>
	)
}

export default PageTitle