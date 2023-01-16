import { MenuItemType } from './menuItem/types'

export const titleStrings = {
  topbarTitle: 'Last Lap',
  logoDescription: 'Tudo sobre o mundo da Fórmula 1'
}
export const menuItemsData: Array<MenuItemType> = [
  { id: 'noticias', value: 'NOTÍCIAS' },
  { id: 'telemetria', value: 'TELEMETRIA' },
  { id: 'campeonato', value: 'CAMPEONATO' },
  { id: 'estatisticas', value: 'ESTATÍSTICAS' },
  { id: 'circuitos', value: 'CIRCUITOS' },
  { id: 'resultados', value: 'RESULTADOS' },
]
export const menuAdminItemsData: Array<MenuItemType> = [
  { id: 'corridas', value: 'CORRIDAS' },
  { id: 'pilotos', value: 'PILOTOS' },
  { id: 'circuitos', value: 'CIRCUITOS' },
  { id: 'equipes', value: 'EQUIPES' },
]

