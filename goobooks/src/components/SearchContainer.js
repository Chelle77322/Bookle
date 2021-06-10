import React,{ Component} from 'react';
import NovelCard from './NovelCard';
import Row from './Row';
import SearchForm from './SearchForm';
import Jumbotron  from './Jumbo';

import api from '../utils/api';


class SearchContainer extends Component {
    state = {
        search: "",
        results: []
    };
//When the page loads
componentDidMount() {
    console.log("Components have mounted");
    this.SearchNovels("");
}
SearchNovels = query => {
    api.search(query).then(result => this.setState({results:result.data.items})).then(console.log(this.state.results)).catch(error => console.log(error));
}
//When a book is clicked on
handlenovelclick = event => {
    let NovelId = event;
    console.log(NovelId);
}
handleinputchange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]: value});
}
handleformsubmit = event => {
    event.preventDefault();
    this.SearchNovels(this.state.search);
}
render () {
    return(
        <div className = "container-fluid five">
            <Jumbotron />
            <Row>
                <SearchForm
                googleNovels = {this.state.search}
                handleformsubmit = {this.handleformsubmit}
                handleinputchange = {this.handleinputchange}/>
            </Row>
            <Row>
                {this.state.results.map(novel =>(
                    <NovelCard
                    id={novel.volumeInfo.id} 
                    key={novel.volumeInfo.id} 
                    title={novel.volumeInfo.title} 
                    description={novel.volumeInfo.description} 
                    imageLink={novel.volumeInfo.imageLinks.thumbnail} 
                    link={novel.volumeInfo.infoLink} 
                    handleClick={this.handlenovelclick}
                        />
                    
                ))}
            </Row>
        </div>
    )
}
}
export default SearchContainer;