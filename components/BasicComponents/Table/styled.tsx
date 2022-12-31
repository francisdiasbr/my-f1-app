import { PrensaEngine } from '@xprog/prensa'

export const Table = PrensaEngine.styled(
  'table',
  {
    border: '1px solid',
    color: '$Neutral100',
    borderRadius: '4px',
    fontFamily: '$primary',
    width: '800px'
  }
)
export const Tr = PrensaEngine.styled(
  'tr',
  {}
)
export const Thead = PrensaEngine.styled(
  'thead',
  {}
)
export const Th = PrensaEngine.styled(
  'th',
  { 
    color: '$Neutral800', 
    fontFamily: '$primary', 
    fontSize: '18px',
    fontWeight: '400'
  }
)
export const Tbody = PrensaEngine.styled(
  'tbody',
  {
    fontFamily: '$primary'
  }
)
export const Td = PrensaEngine.styled(
  'td',
  { 
    border: '1px solid', 
    borderColor: '$Neutral300', 
    borderRadius: '4px', 
    fontFamily: '$primary',
    height: '18px'
  }
)