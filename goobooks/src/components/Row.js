import React from 'react';

//Generates the rows of books from the api search result
function Row (props){
    return <div className = "row">
        {props.children}
    </div>;
}
export default Row;