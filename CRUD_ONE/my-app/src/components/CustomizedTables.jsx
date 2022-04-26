import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import {deleteTodo} from '../redux/action'
import BasicModal from './BasicModal';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];





export default function CustomizedTables() {

    const store = useSelector((state)=> state.todoList);
    const dispatch = useDispatch();
    
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: "40%" }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">ID</StyledTableCell>
            <StyledTableCell align="left">Title</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {store.map((todo) => (
            <StyledTableRow key={todo.id}>
              <StyledTableCell align="right">{todo.id}</StyledTableCell>
              <StyledTableCell align="left"><h4>{todo.title}</h4></StyledTableCell>
              <StyledTableCell align="right">{todo.completed === true ? <h4 style={{color:"green"}}>Completed</h4> : <h4 style={{color:"red"}}>Pending</h4>}</StyledTableCell>
              <StyledTableCell align="right" sx={{display:"flex", gap:"10px"}}>
                   <Button variant="contained" >{<BasicModal todo={todo}/>}</Button>
                   <Button variant="contained" color="error" onClick={()=>dispatch(deleteTodo(todo.id))}>Delete</Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
