
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function DropDownList(props) {
  // const classes = useStyles();
  const [boxVal , setBoxVal] = useState('')
  const handleChange = (event) => {
    setBoxVal(event.target.value);
    props.dropDownHandleChange({[props.field.name] : event.target.value} , props.ind)
  };

  return (
    <Grid container justify="center"
    style={{
      margin : "10px",
      width : "100%"
      }}>
      <div>
          {/* <div>
          لطفا یک مورد را انتخاب کنید
          </div> */}
          <InputLabel id="demo-simple-select-label">{props.field.title}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={boxVal}
            onChange={handleChange}
          >
          {props.field.options !== null ? (props.field.options.map((item) => (
                        <MenuItem
                          key={item.value}
                          value={item.value}>
                          {item.label}
                        </MenuItem>
          ))): "loading"}

          </Select>
      </div>
    </Grid>

  );
}
