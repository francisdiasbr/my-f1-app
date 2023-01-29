import { FormInputType } from 'components/BasicComponents/FormInput/types'

export const driversFormInputs: Array<FormInputType> = [
  { name: 'driverNameLabel', value: 'PILOTO'},
  { name: 'driverBirthLabel', value: 'DATA DE NASCIMENTO' },
  { name: 'driverCountryLabel', value: 'PAÍS' },
  { name: 'driverTeamLabel', value: 'EQUIPE' },
]

// data-table
interface Data {
  name: string;
  birth: string;
  country: string;
  team: string;
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
    label: 'Piloto',
  },
  {
    id: 'birth',
    numeric: false,
    disablePadding: false,
    label: 'Data de nascimento',
  },
  {
    id: 'country',
    numeric: false,
    disablePadding: false,
    label: 'País',
  },
  {
    id: 'team',
    numeric: false,
    disablePadding: false,
    label: 'Equipe',
  }
];