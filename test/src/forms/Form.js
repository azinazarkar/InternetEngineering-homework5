import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MaterialUIPickers from "../items/DatePicker";
import Axios from "axios";


function Form (props){
    console.log("salam")
    const [form, setForm] = useState(null);
    const {id} = useParams();
    useEffect(() => {
      Axios.get("http://localhost:9000/api/forms/" + id).then(
        (res) => {
          setForm(res.data);
        }
      );
    }, [id]);

    return (
        <div>
        {form !== null ? (
          <div>{form.title}</div>
          
        ) : (
          "loading"
        )}
      </div>
    );
  }
  
  export default Form;
  