import React, {Component} from "react";
import NovelCard from "../components/NovelCard";
import Row from "../components/Row";
import SearchForm from "../components/SearchForm";
import Jumbotron from "../components/Jumbo";
import api from "../utils/api";

class Search extends Component {

    state = {
        search: "",
        results: []
    };
//When the page loads initially
componentDidMount() {
    console.log("Components successfully mounted");
    this.searchNovels("James Joyce");
}

searchNovels = query => {
    api.search(query).then(result => this.setState({results:result.data.items})).then(console.log(this.state.results)).catch(error => console.log(error));
}
//When save button is clicked
handlesaveclick = event => {
    const novelInfo = event;
    console.log(novelInfo);
//You then want to save the book to the data base
api.saveNovel(novelInfo).then(result => console.log(result)).catch(error => console.log(error));
}
handleinputchange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]: value});
}
handleformsubmit = event => {
    event.preventDefault();
    this.searchNovels(this.state.search);
}
render() {
    return (
        <div className = "container-fluid five">
            <Jumbotron />
            <Row>
                <SearchForm
                search = {this.state.search}
                handleformsubmit = {this.handleformsubmit}
                handleinputchange = {this.handleinputchange} />
            </Row>
            
            <Row >
                    {this.state.results.map(novel => ( 
                        <NovelCard
                            id={novel.id} 
                            key={novel.id} 
                            title={novel.volumeInfo.title} 
                            description={novel.volumeInfo.description} 
                            image={novel.volumeInfo.imageLinks.thumbnail} 
                            link={novel.volumeInfo.infoLink} 
                            handlesaveclick={this.handlesaveclick}
                        />
                    ))}
            </Row>
            </div>
       
    )
}
}
export default Search;