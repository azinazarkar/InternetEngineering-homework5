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
        Axios.get("http://localhost:9000/api/forms").then((res) => {
          this.setState({
            list_of_forms: res.data,
            loading : false,
          });
        });
    }

    render (){
        
        return (
            <div>
                {<div>{ this.state.loading == true ? ( <ReactLoading type={"bars"} color={"white"} />) : null } </div>}
                {this.state.list_of_forms.map((element) => (
                <div>
                    <Router>
                        <Link to={`/forms/${element.id}`}>{element.title}</Link>
                    </Router>
                </div>
                ))}
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