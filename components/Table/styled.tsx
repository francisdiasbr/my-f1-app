import { PrensaEngine } from '@xprog/prensa'
import { Block } from '@xprog/prensa'

export const Title = PrensaEngine.styled('title', { color: 'black', fontSize: '16px' })
export const Table = PrensaEngine.styled('table', {border: '1px solid', borderColor: '#767676', borderRadius: '4px', fontFamily: '$primary', width: '80%'})
export const Tr = PrensaEngine.styled('tr', {})
export const Thead = PrensaEngine.styled('thead', {})
export const Th = PrensaEngine.styled('th', {color: '$Neutral800', fontFamily: '$primary', fontSize: '18px'})
export const Tbody = PrensaEngine.styled('tbody', { fontFamily: '$primary' })
export const Td = PrensaEngine.styled('td', { border: '1px solid', borderColor: '#767676', borderRadius: '4px', fontFamily: '$primary'})