import { FormInputType } from "components/BasicComponents/FormInput/types"

export const circuitsFormFields: Array<FormInputType> = [
  { name: 'circuitNameLabel', label: 'Circuito'},
  { name: 'circuitCountryLabel', label: 'País' },
  { name: 'circuitCityLabel', label: 'Cidade' },
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