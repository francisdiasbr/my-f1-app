import { FormInputProps } from "components/FormInput"

export const titleStrings = {
  circuitsTitle: 'Circuitos',
  driversTitle: 'Pilotos',
  statisticsTitle: 'Estatísticas'
}

export const tableTitles = {
  circuitsTableTitle: 'Circuitos cadastrados'
}

export const circuitsFormInputs: Array<FormInputProps> = [
  { name: 'CircuitLabel', value: 'Nome do circuito'},
  { name: 'CountryLabel', value: 'País' },
  { name: 'CityLabel', value: 'Cidade' },
  { name: 'FastestLapTimeLabel', value: 'Volta + rápida (tempo)' },
  { name: 'FastestLapYearLabel', value: 'Volta + rápida (ano)' },
  { name: 'FastestLapDriverLabel', value: 'Volta + rápida (piloto)' }
]

export const circuitsTableHeaders = [{ value: 'Nome do circuito'}, {value: 'País'}, {value: 'Cidade' }, {value: 'Volta + rápida (tempo)' }, {value: 'Volta + rápida (ano)'}, {value: 'Volta + rápida (piloto)'} ]