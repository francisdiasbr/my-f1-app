import { FormInputType } from 'components/BasicComponents/FormInput/types'

// nomes dos inputs do formulário

export const racesFormFields: Array<FormInputType> = [
  { name: 'raceNameLabel', label: 'Circuito'},
  { name: 'raceDateLabel', label: 'Data da corrida' },
  { name: 'raceWinnerLabel', label: 'Vencedor' }
]

// data-table
interface Data {
  name: string;
  date: string;
  winner: string;
}
interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

export const headCells: readonly HeadCell[] = [
  {
    id: 'name',
    numeric: false,
    disablePadding: false,
    label: 'Corrida',
  },
  {
    id: 'date',
    numeric: false,
    disablePadding: false,
    label: 'Data da corrida',
  },
  {
    id: 'winner',
    numeric: false,
    disablePadding: false,
    label: 'Vencedor',
  }
];