import React, {Component} from "react";
import Jumbotron from "../components/Jumbo";

class Saved extends Component{
    render () {
        return (
            <div className = "container-fluid">
                <Jumbotron />
                <h2> Saved Books Page</h2>
            </div>
        )
    }
}
export default Saved;