import { FormInputType } from "components/BasicComponents/FormInput/types"

export const circuitsFormInputs: Array<FormInputType> = [
  { name: 'circuitLabel', value: 'CIRCUITO'},
  { name: 'countryLabel', value: 'PAÍS' },
  { name: 'cityLabel', value: 'CIDADE' },
]

// data-table
interface Data {
  name: string;
  country: string;
  city: string;
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
    label: 'Circuito',
  },
  {
    id: 'country',
    numeric: false,
    disablePadding: false,
    label: 'País',
  },
  {
    id: 'city',
    numeric: false,
    disablePadding: false,
    label: 'Cidade',
  }
];