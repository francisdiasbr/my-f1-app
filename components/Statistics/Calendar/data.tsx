import { FormInputType } from "components/BasicComponents/FormInput/types"

export const calendarFormFields: Array<FormInputType> = [
  { name: 'calendarOrderLabel', label: 'Ordem', type: 'input'},
  { name: 'calendarNameLabel', label: 'GP', type: 'input'},
  { name: 'calendarCountryLabel', label: 'País', type: 'input' },
  { name: 'calendarDateLabel', label: 'Data da corrida', type: 'input' },
  { name: 'calendarFlagLabel', label: 'Bandeira', type: 'input' },
  { name: 'calendarInfoLabel', label: 'Informações', type: 'textarea' },
]

// data-table
interface Data {
  order: string;
  name: string;
  country: string;
  date: string;
  flag: string;
  info: string;
}
interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

export const headCells: readonly HeadCell[] = [
  {
    id: 'order',
    numeric: false,
    disablePadding: false,
    label: 'Ordem',
  },
  {
    id: 'name',
    numeric: false,
    disablePadding: false,
    label: 'GP',
  },
  {
    id: 'country',
    numeric: false,
    disablePadding: false,
    label: 'País',
  },
  {
    id: 'date',
    numeric: false,
    disablePadding: false,
    label: 'Data da corrida',
  },
  {
    id: 'flag',
    numeric: false,
    disablePadding: false,
    label: 'Bandeira',
  },
  {
    id: 'info',
    numeric: false,
    disablePadding: false,
    label: 'Informações',
  },
];