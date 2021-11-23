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
  max-width: 600px;
  width: calc(100% - 10px);
`
// Divs topbar

export const TopbarContainer = styled.div`
  margin: 10px 0px;
  max-width: 600px;
  width: 100%;
`

export const TopbarLogo = styled.div`
  display: flex;
  margin: 10px 0px;
  max-width: 600px;
  justify-content: space-evenly;
  width: 100%;
`

export const TopbarMenu = styled.div`
  align-content: space-around;
  align-items: center;
  background-color: papayawhip;
  display: flex;
  flex-direction: row;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  justify-content: space-evenly;
  margin: 10px 0px;
  max-width: 600px;
  width: 100%;
`

// Headings

export const FormTitle = styled.h1`
  font-size: 16px;
`

export const TableTitle = styled.h1`
  font-size: 16px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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
