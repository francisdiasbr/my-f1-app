import styled from 'styled-components'

// Divs input formulários

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const InputField = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  width: 100%;

  @media (min-width: 720px) {
    flex-direction: column;
    width: 50%;
  }
`
export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  width: 100%;

  @media (min-width: 720px) {
    flex-direction: row;
  }
`

// Divs margins

export const MarginContainer = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: #005fdb;
  font-size: 16px;
  padding: 10px;
  margin: 10px;
  width: calc(100% - 40px);
`

// Divs topbar

export const TopbarContainer = styled.div`
  position: sticky;
  width: 100%;
`

export const TopbarLogo = styled.div`
  align-content: space-around;
  align-items: center;
  display: flex;
  position: sticky;
  width: 100%;
`

export const TopbarMenu = styled.div`
  align-content: space-around;
  align-items: center;
  background-color: #ff8700;
  display: flex;
  flex-direction: row;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  gap: 40px;
  height: 40px;
  justify-content: space-evenly;
  padding: 10px;
  position: sticky;
  width: calc(100% - 20px);
`

// Headings

export const FormTitle = styled.h1`
  font-size: 14px;
`

export const TableTitle = styled.h1`
  font-size: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-style: normal;
  text-align: center;
`

export const ResultTitle = styled.h2`
  color: black;
  font-size: 14px;
  margin: 0px;
`

// Labels

export const InputTag = styled.label`
  font-size: 14px;
  color: gray;
  text-align: center;
`

// Tables

export const MyTable = styled.table`
  border-collapse: collapse;
  border-spacing: 30px;
  border-radius: 30px;
  border: 2px solid black;
  color: black;
  margin: 0 1em;
  padding: 0.25em 1em;
  table-layout: fixed;
  width: 100%;
`
export const TableBody = styled.tbody`
  width: 100%;
`

export const CellTable = styled.td`
  color: black;
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
