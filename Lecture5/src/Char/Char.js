import React from 'react';

// STYLING CONCEPT
// PASSING METHODS AS REFERENCES BETWEEN 2 COMPONENTS

const Char = (props) => {
    const styles = {
        display : 'inline-block',
        padding: '16px',
        margin: '16px',
        border: '1px solid black',
        textAlign: 'center',
    }
    return(
        <div style = {styles} onClick={props.clicked}>
            {props.character}
        </div>
    )
}

export default Char;