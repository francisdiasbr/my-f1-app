import { Block, Typography } from "@xprog/prensa"
import { map } from 'lodash'
import * as S from './styled'
import { blockProps } from "./props"

export type TableProps = {
  headers: Array<{ value: string }>
  items: Array<{ values: Array<string> }>
}
const Table: React.FC<TableProps> = ({ items, headers }) => {
  return (
    <Block
    css={blockProps}>
      <S.Table>
        <S.Thead>
          <S.Tr
            className="tableRow">
            {map(headers, (item, key) => <S.Th key={key}>{item.value}</S.Th>)}
          </S.Tr>
        </S.Thead>
        <S.Tbody>
          {map(items, (item, key) =>
            <S.Tr key={key}>
              {map(item.values, (value, key2) =>
                <S.Td key={key2}>{value}</S.Td>
              )}
            </S.Tr>
          )}
        </S.Tbody>
      </S.Table>
    </Block>
  )
}

export default Table