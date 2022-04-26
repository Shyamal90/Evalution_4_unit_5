import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import {editTodo} from '../redux/action'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({todo}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();

  const [todoTitile,setTodoTitle] = React.useState(todo.title)
   
  const handleSubmit = (event) =>{
      event.preventDefault()    
  }

  const handleUpdate = () => {
      let newData = {
          userId : todo.userId,
          id : todo.id,
          title : todoTitile,
          completed : todo.completed
      }

      dispatch(editTodo(newData));
      handleClose()
  }


  return (
     
    <div>
      <Button onClick={handleOpen} sx={{color:"white"}}>Edit</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Todo
          </Typography>
          <form onSubmit={()=>handleSubmit()}>
              <div className="idContainer">
                  <label >Id : </label>
                  <input type="text" value = {todo.id}/>
              </div>

              <div className="todoNameContainer">
                  <label>Todo Name : </label>
                  <input type="text"  value={todoTitile} onChange={(event)=>setTodoTitle(event.target.value)}/>
              </div>

              <div className="todoStatusContainer">
                  <label >Todo Status : </label>
                  <input type="text" value={todo.completed === true ? "Completed" : "Pending"}/>
              </div>

              <button type="button" onClick={()=>handleUpdate()}>Update</button>
              
          </form>
        </Box>
      </Modal>
    </div>
  );
}
