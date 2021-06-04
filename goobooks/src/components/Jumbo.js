import React from 'react';

function Jumbotron(props){
    return (
        <div className = "jumbotron jumbotron-fluid">
            <div className = "container">
                <h1 className = "display-4">
                    GooBooks React Search App
                </h1>
                <p className = "lead"> Look for and save the books that interest you</p>
            </div>
        </div>
    );
}
export default Jumbotron;