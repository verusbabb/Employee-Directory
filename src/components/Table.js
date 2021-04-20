import React, {
    Component
} from "react";
import API from "../Utils/API";

class Table extends Component {
    state = {
        data: []
    };

    // When the component mounts, load the RANDOM EMPLOYEES to be displayed
    componentDidMount() {
        this.loadRandomEmployees();
    }

    loadRandomEmployees = () => {
        API.getRandomEmployees()
          .then(res => {
              console.table(res.data)
              this.setState(res.data)
              console.log(this.state.results)
              console.log(this.state.results[0].id.value)
              console.log(this.state.results[0].gender)
              
          })
        }

    render() {
        // INSERT RETURN CODE HERE
        return ( 
            <div >
                <h3>Hello Again</h3>
            </div>
        );
    }
}

    export default Table;