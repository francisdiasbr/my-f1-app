import styled from "styled-components";

// Agrupar as consts por função sintática

// Divs

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  width: 100%;
`;

export const TopbarContainer = styled.div`
  align-content: space-around;
  align-items: center;
  background-color: #ff8700;
  display: flex;
  flex-direction: row;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  gap: 40px;
  height: 40px;
  padding: 10px;
  justify-content: space-evenly;
  width: calc(100% - 20px);
`;

export const TopbarLogo = styled.div``;

export const TopbarMenu = styled.div``;

// Headings

export const Heading1 = styled.h1`
  font-size: 14px;
`;

export const Text1 = styled.h1`
  font-size: 20px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-style: normal;
  text-align: center;
`;

export const Heading2 = styled.h2`
  color: black;
  font-size: 14px;
  margin: 0px;
`;

// Tables

export const MyTable = styled.table`
  border-collapse: collapse;
  border-spacing: 30px;
  border-radius: 30px;
  border: 2px solid black;
  color: black;
  margin: 0 1em;
  padding: 0.25em 1em;
  text-align: center;
  width: 100%;
`;

export const CellTable = styled.td`
  color: black;
`;

export const HeaderTable = styled.th`
  color: BLACK;
  font-weight: bold;
  color: black;
  font-size: 16px;
  margin: 0px;
`;
