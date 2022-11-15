import styled from 'styled-components'

// Cards

export const Card = styled.div`
  margin: 10px 0px;
`

// Divs margins

export const MarginContainer = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: #005fdb;
  font-size: 16px;
  margin: 10px 0px;
  max-width: 800px;
  width: calc(100% - 10px);

  @media (min-width: 800px) {
    flex-direction: column;
    position: relative;
  }
`
// Divs topbar

export const TopbarContainer = styled.div`
  margin: 10px 0px;
  max-width: 980px;
  width: 100%;
`

export const TopbarLogo = styled.div`
  display: flex;
  margin: 10px 0px;
  max-width: 980px;
  align-items: center;
  flex-direction: column;
  width: 100%;
`

export const TopbarMenu = styled.div`
  align-content: space-around;
  align-items: center;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 10px 0px;
  max-width: 980px;
  width: 100%;

  @media (min-width: 800px) {
    flex-direction: row;
  }
`

// Headings

export const FormTitle = styled.h1`
  font-size: 16px;
  color: maroon;
`

export const TableTitle = styled.h1`
  font-size: 16px;
  font-style: normal;
  justify-content: left;
  text-align: left;
`

export const ResultTitle = styled.h2`
  color: black;
  font-size: 14px;
  justify-content: center;
  margin: 0px;
  text-align: center;
`

// Labels

export const InputTag = styled.label`
  font-size: 14px;
  color: gray;
  justify-content: left;
  text-align: left;
`

// Tables

export const MyTable = styled.table`
  border-collapse: collapse;
  border-spacing: 30px;
  border-radius: 30px;
  border: 1px solid black;
  color: black;
  margin: 0 1;
  table-layout: fixed;
  width: calc(100% - 10px);
`
export const TableBody = styled.tbody`
  width: 100%;
`

export const CellTable = styled.td`
  color: black;
  text-align: center;
`

export const HeaderTable = styled.th`
  color: BLACK;
  font-weight: bold;
  color: black;
  font-size: 16px;
  margin: 0px;
`
export const TableRow = styled.tr`
  text-align: center;
  width: 100%;
`
export const TableHead = styled.thead`
  text-align: center;
  width: 100%;
`

// Divs input formulários

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 10px 0px;
  max-width: 980px;
  width: 100%;
`

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0px;
  max-width: 980px;
  width: 100%;
`
export const Input = styled.input`
  background: transparent;
  border-radius: 5px;
  border: 1px solid #03265a;
  color: black;
  margin: 10px 2px;
`

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  max-width: 980px;
  width: calc(100% - 10px);
`
export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin: 10px 0px;
  max-width: 980px;
  width: calc(100% - 10 px);
`
