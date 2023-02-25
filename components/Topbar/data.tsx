import { MenuItemType } from './menuItem/types'

export const titleStrings = {
  topbarTitle: 'Last Lap',
  logoDescription: 'Tudo sobre o mundo da Fórmula 1'
}
export const menuItemsData: Array<MenuItemType> = [
  { 
    id: 'home',
    href: '#home',
    value: 'HOME',
  },
  { 
    id: 'noticias',
    href: '#noticias',
    value: 'NOTÍCIAS'
  },
  { 
    id: 'telemetria',
    href: '#telemetria',
    value: 'TELEMETRIA'
  },
  { 
    id: 'campeonato',
    href: '#campeonato',
    value: 'CAMPEONATO'
  },
  { 
    id: 'estatisticas',
    href: '#estatisticas',
    value: 'ESTATÍSTICAS'
  },
  { 
    id: 'circuitos',
    href: '#circuitos',
    value: 'CIRCUITOS'
  },
  { 
    id: 'resultados',
    href: '#resultados',
    value: 'RESULTADOS'
  },
]
export const menuAdminItemsData: Array<MenuItemType> = [
  { 
    id: 'home',
    href: '/',
    value: 'HOME'
  },
  { 
    id: 'corridas',
    href: '/admin/corridas',
    value: 'CORRIDAS'
  },
  { 
    id: 'pilotos',
    href: '/admin/pilotos',
    value: 'PILOTOS'
  },
  { 
    id: 'circuitos',
    href: '/admin/circuitos',
    value: 'CIRCUITOS'
  },
  { 
    id: 'equipes',
    href: '/admin/equipes',
    value: 'EQUIPES'
  },
]

