import React, {Component} from "react";
import Jumbotron from "../components/Jumbo";
import api from "../utils/api";
import SaveContainer from "../components/SaveContainer.js";

class Saved extends Component{

    state= {
        savedNovels: []
    }
    componentDidMount = () =>{
        this.getNovels()
    }
    deleteGoogleNovel = currentBook => {
        api.deleteNovel (currentNovel.id).then(result => {
            console.log("You have removed this book from your saved list", result);
            this.getNovels();
        }).catch(error => {
            console.log("Investigate cause of error",error);
        })
    }
    getNovels = () => {
        api.getNovels().then (result => {
            this.setState ({
                savedNovesl: result.data
            })
            console.log("This is your result from getNovels", result);
        }).catch(error => {
            console.log("Please investigate this error", error);
        })
    }
    render() {
        return (
            <div className = "container-fluid blend">
                <Jumbotron />
                <h2> Saved Books Page</h2>
                {this.state.savedNovels.length?(
                    <SaveContainer
                    novelState = {this.state.savedNovels}
                    deleteGoogleNovel = {this.deleteGoogleNovel}></SaveContainer>
                ): (
                    <h5>No results to display</h5>
                )}
                
            </div>
        )
    }
}
export default Saved;