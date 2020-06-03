import React from "react";
import Axios from "axios";
import ReactLoading from "react-loading";
import {Link , BrowserRouter as Router} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';

export default class MainPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            list_of_forms : [],
            loading : true,
        };
    }

    componentDidMount() {
        Axios.get("https://hw5-backend-ee.herokuapp.com/api/forms").then((res) => {
        console.log(res.data)
          this.setState({
            list_of_forms: res.data,
            loading : false,
          });
        }
        );
    }

    render (){
        return (
            <div>
                <div>{this.state.loading ? "loading" :
                    (this.state.list_of_forms.map((form) => (
                        <div>
                            <Link to={`/forms/${form.id}`}>{form.title}</Link>
                        </div>
                        )))
                }</div>

            </div>
            );
    }

}

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
}));


function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}