import styled from "styled-components";


export const TableWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  max-height: calc(100vh - 80px);
  margin: 0 auto;
  overflow-x: auto;
`;

export const StyledTable = styled.table`
  min-width: 100%;
  border-collapse: collapse;
  thead {
    position: sticky;
    top: 0;

     tr{
      background-color: #cecece;
  }
  }
  tbody {
    height: 100px;
    max-height: 100px;
    overflow-y: auto;    
  }
  th,
  td {
    padding: 0.25em 0.5em;
  }

  th {
    position: sticky;
    top: 0;
    font-size: 14px;
    color: var(--color-primary-4);
          background-color: #cecece;
  }

  td {
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  }
`;




