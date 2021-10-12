import styled from "styled-components";

//representa a tabela cumulativa de dados inseridos. 

export const Mytable = styled.table`
  background: transparent;
  border-collapse: collapse;
  border-spacing: 30px;
  border-radius: 30px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em; 
  text-align: center;
  width: 600px;
  
`
export const Text1 = styled.h1`
  background-color: papayawhip;
  font-size: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-style: normal;
  text-align: center;
`

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const HeaderTable = styled.th`
  color: red;
  font-weight: bold;
`

export const CellTable = styled.td`
  color: black;
`