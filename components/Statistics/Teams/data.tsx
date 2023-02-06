import { FormInputType } from 'components/BasicComponents/FormInput/types'

// nomes dos inputs do formulário

export const teamsFormFields: Array<FormInputType> = [
  { name: 'teamNameLabel', label: 'Equipe'},
  { name: 'teamCountryLabel', label: 'País' },
]

// data-table
interface Data {
  name: string;
  country: string;
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
    label: 'Equipe',
  },
  {
    id: 'country',
    numeric: false,
    disablePadding: false,
    label: 'País',
  }
];
