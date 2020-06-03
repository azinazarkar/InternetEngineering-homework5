import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


function MultilineTextFields(props) {

  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '60ch',
        padding : 5,
      },
    },
  }));


  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');
  const [id , setId] = React.useState('outlined-textarea');
  const [label , setLabel] = React.useState('Placeholder');
  const [placeholder , setPlaceholder] = React.useState ('placeholder');


  const handleChange = (event) => {
    setValue(event.target.value);
  };

  function handleOrangeClick() {
    // Similar to this.setState({ fruit: 'orange' })
    setId('adf');
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id={props.id}
          label={props.label}
          placeholder={props.placeholder}
          multiline
          variant="outlined"
        />
      </div>
    </form>
  );
}


export default MultilineTextFields;