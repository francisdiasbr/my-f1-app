import { PrensaEngine } from '@xprog/prensa'

export const Table = PrensaEngine.styled(
  'table',
  {
    border: '1px solid',
    color: '$Neutral200',
    borderRadius: '4px',
    fontFamily: '$primary',
    width: '800px'
  }
)
export const Tr = PrensaEngine.styled(
  'tr',
  {
    align: ['row', 'center', 'between'],
    borderBottomWidth: '1px',
    borderBottomColor: '$secondary',
    borderBottomStyle: 'solid',
    py: '12px',
    px: '16px',
  }
)
export const Thead = PrensaEngine.styled(
  'thead',
  {
    backgroundColor: 'white',
  }
)
export const Th = PrensaEngine.styled(
  'th',
  {
    color: '$Primary',
    fontFamily: '$tertiary',
    fontSize: '16px',
    fontWeight: '600',
    px: '12px',
    py: '28px',
    width: '100%'
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
    align: ['row', 'center', 'middle'],
    color: 'Black',
    fontFamily: '$primary',
    fontSize: '12px',
    height: '18px',
    width: '100%'
  }
)