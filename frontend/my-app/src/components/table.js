import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import * as React from 'react';
import { MyPopup } from './popup';
import styled from 'styled-components';

const Scroll = styled.div`
  flex: 1;
  max-height:770px;
  // background: #aaa;
  overflow-y: scroll;
  border:0.5px solid #b0b0b0
`;

// max-height: 900px;

function createRow(data) {
  return {
    'time': data['time'],
    'test_cases_num': data['test_cases_num'],
    'passed': data['passed'],
    'status': data['status'],
    'error': data['error'],
    'task_code': data['task_code']
  }
}

function getColorForStatus(status) {
  if(status == "OK") return 'green';
  if(status == "WA") return '#e6de00';
  if(status == "TLE") return 'red';
  if(status == "CE") return 'red';
  return 'black';
}

function formatTime(unix) {
  let date = new Date(unix * 1000);
  return date.toLocaleDateString("en-GB") + " " + date.toLocaleTimeString("it-IT");
}

export default function BasicTable(props) {
  return (
    props.data == null ? <></> :
    props.data.length == 0 ?
    <>Nema poslatih rešenja</> :
    <Scroll>
      <TableContainer component={Paper}>
        <Table sx={{  }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell><b>Vreme</b></TableCell>
              <TableCell align="right"><b>Status</b></TableCell>
              <TableCell align="center"><b>Broj test primera</b></TableCell>
              <TableCell align="center"><b>Tačni test primeri</b></TableCell>
              <TableCell align="center"><b>Greška</b></TableCell>
              <TableCell align="center"><b>Source kod</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data
            .sort((a,b) => a.time > b.time?-1:1)
            .map((row) => {
              row = createRow(row)
              return (
                <TableRow
                  key={row.time}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {formatTime(row.time)}
                  </TableCell>
                  <TableCell style={{ 'color': getColorForStatus(row.status) }} align="right"><b>{row.status}</b></TableCell>
                  <TableCell align="center">{row.test_cases_num}</TableCell>
                  <TableCell align="center">{row.passed}</TableCell>
                  <TableCell align="center">{row.error !== "" ? <MyPopup code={row.error} text={"Prikaži grešku"} title={"Greška"}/> : <>Nema greške</>}</TableCell>
                  <TableCell align="center"><MyPopup code={row.task_code} text={"Prikaži kod"} title={"Kod"}/></TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      </Scroll>
  );
}