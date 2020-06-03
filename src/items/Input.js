import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


function InputBox(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');
  const [id , setId] = React.useState('outlined-textarea');
  const [label , setLabel] = React.useState('Placeholder');
  const [placeholder , setPlaceholder] = React.useState ('placeholder');


  const handleChange = (event) => {
    setValue(event.target.value);
    props.inputHandleChange( {[props.field.name] : event.target.value}, props.ind);
  };



  return (
    <Grid container justify="space-around">
      <form className={classes.root}noValidate autoComplete="off">
        <div>
          <TextField
            id={props.id}
            label={props.field.title}
            placeholder={props.field.title}
            multiline
            variant="outlined"
            onChange = {handleChange}
          />
        </div>
      </form>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: "10px",
      width: '100%',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
  },
}));



export default InputBox;