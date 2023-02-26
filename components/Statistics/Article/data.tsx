import { FormInputType } from "components/BasicComponents/FormInput/types"

export const articleFormFields: Array<FormInputType> = [
  { name: 'articleTitleLabel', label: 'Título', type: 'input'},
  { name: 'articleTextLabel', label: 'Texto', type: 'textarea' },
  { name: 'articleAuthorLabel', label: 'Autor', type: 'input' },
]

// data-table
interface Data {
  title: string;
  text: string;
  author: string;
}
interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

export const headCells: readonly HeadCell[] = [
  {
    id: 'title',
    numeric: false,
    disablePadding: false,
    label: 'Título',
  },
  {
    id: 'text',
    numeric: false,
    disablePadding: false,
    label: 'Matéria',
  },
  {
    id: 'author',
    numeric: false,
    disablePadding: false,
    label: 'Autor',
  }
];