import React from 'react';

function SearchForm(props){
    return (
        <form>
            <div className = "form-group">
                <label htmlFor = "search">Search for Book:</label>
                <input onChange = {props.handleinputchange}
                value = {props.search}
                name = "search"
                type = "text"
                className = "form-control"
                placeholder = "Search for a book"
                id = "search"/>

                <button onClick = {props.handleformsubmit} className = "btn btn-primary">Search</button>
            </div>
        </form>
    );
}
export default SearchForm;