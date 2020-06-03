import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DatePickerBox from "../items/DatePicker";
import InputBox from "../items/Input";
import Axios from "axios";
import { fileToObject } from "antd/lib/upload/utils";
import { Button } from 'antd';
import DropDownList from "../items/DropDown"
import SimpleMap  from "../Map/MainMap"
import { Grid } from "@material-ui/core";
function Form (props){

    const {id} = useParams();
    const [form, setForm] = useState(null);
    const [vals , setVals] = useState([])
    // const [missed , setMissed] = useState([])
    useEffect(() => {
      Axios.get("https://hw5-backend-ee.herokuapp.com/api/forms/" + id).then(
        (res) => {
          setForm(res.data);
        }
      );
    }, [id]);

    const handleVals = ((obj , i) => {
      vals[i] = obj;
      console.log(vals)
    });


    const handleClick = (() =>{
      let missed = []
      let valKeys = []
      vals.forEach(val => {
        valKeys.push(Object.keys(val)[0])
      })
      console.log(valKeys)
      form.fields.forEach(item => {
        if (item.required){
          if (!valKeys.includes(item.name)){
              missed.push(item.title)
          }
        }
      });
      if (missed.length === 0 ){
        Axios.post(`https://hw5-backend-ee.herokuapp.com/api/forms/${id}/submitted`, { vals })
        .then(res => {
          console.log(res.data)
        })
      }
      else {
        if (missed.length === 1){
          alert(missed[0] + " is required")
        }
        else {
          alert(missed.join(" and ") + " are required")
        }
      }
    })

    return <Grid  Grid container justify="space-around">
      {(form !== null ?
      (form.fields.map( (item , index) =>{
        switch(item.type) {
            case 'Text':  if (item.options){
                            return <DropDownList
                                      field = {item}
                                      dropDownHandleChange = {handleVals}
                                      ind = {index}
                                    />
                          }
                          else {
                            return  <InputBox
                                      field = {item}
                                      inputHandleChange = {handleVals}
                                      ind = {index}
                          />}

            case 'Date': return   <DatePickerBox
                                  datePickerHandleChange = {handleVals}
                                  field = {item}
                                  ind = {index}/>
            case 'Location' : return <SimpleMap
                                      locationHandleChange = {handleVals}
                                      field = {item}
                                      ind = {index}/>
          }
      })) : "loading")}
      <Button
        onClick = {handleClick}
        style={{
            margin : "40px"
        }}
        variant="outlined" color="secondary">
        ثبت
        </Button>
      </Grid>


  }



  export default Form;
