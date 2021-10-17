import { CellTable } from '../Styleguide/styled'

export type CircuitItemProps = {
  circuitname: string
  circuitcountry: string
  circuitcity: string
  circuitfastestlaptime: string
  circuitfastestlapyear: string
  circuitfastestlapdriver: string
}

const CircuitItem = ({
  circuitname,
  circuitcountry,
  circuitcity,
  circuitfastestlaptime,
  circuitfastestlapyear,
  circuitfastestlapdriver,
}: CircuitItemProps) => {
  return (
    <tr>
      <CellTable>{circuitname}</CellTable>
      <CellTable>{circuitcountry}</CellTable>
      <CellTable>{circuitcity}</CellTable>
      <CellTable>{circuitfastestlaptime}</CellTable>
      <CellTable>{circuitfastestlapyear}</CellTable>
      <CellTable>{circuitfastestlapdriver}</CellTable>
    </tr>
  )
}

export default CircuitItem
