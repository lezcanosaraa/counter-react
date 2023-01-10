import React from "react";

function Button({text, isButtonClick, handleClick }) {
    return (
        <button
            className={isButtonClick ? 'button-click' : 'button-restart'}
            onClick={handleClick}>
           {text}
        </button>
    )
}

export default Button;