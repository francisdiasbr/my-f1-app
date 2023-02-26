import { MenuItemType } from './menuItem/types'

export const titleStrings = {
  topbarTitle: 'Last Lap',
  logoDescription: 'Tudo sobre o mundo da Fórmula 1'
}
export const menuItemsData: Array<MenuItemType> = [
  { 
    id: 'home',
    href: '/home',
    value: 'Home',
  },
  { 
    id: 'campeonato',
    href: '/home/campeonato',
    value: 'Campeonato'
  },
  { 
    id: 'circuitos',
    href: '/home/circuitos',
    value: 'Circuitos'
  },
  { 
    id: 'resultados',
    href: '#resultados',
    value: 'Resultados'
  },
  { 
    id: 'estatisticas',
    href: '/admin',
    value: 'ADMIN'
  },
]
export const menuAdminItemsData: Array<MenuItemType> = [
  { 
    id: 'home',
    href: '/home',
    value: 'HOME'
  },
  { 
    id: 'calendario',
    href: '/admin/calendario',
    value: 'CALENDÁRIO'
  },
  { 
    id: 'materia',
    href: '/admin/materias',
    value: 'MATÉRIAS'
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

