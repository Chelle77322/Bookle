import React from 'react';

const styles = {
    image: {
        margin: 15,
        height: "250px",
        width: "250px"
    }
}
function NovelCard(props) {
    return (
        <div className = "col-lg-3" id = {props.id} key = {props.id}>
            <div className = "img-container">
                <h5>{props.title}</h5>
                <h5>{props.authors}</h5>

                <img alt = {props.title}
                src = {props.image}
                style = {styles.image} />

            <p> <a href = {props.link}>Link</a></p>    
            <p onClick = {() => props.handlesaveclick(props)}>Save Book</p>
            <p>{props.description}</p>
            </div>
        </div>
    );
}
export default NovelCard;