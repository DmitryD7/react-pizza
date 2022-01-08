import React from "react";
import classNames from 'classnames';

function Button({className, outline, onButtonClick, children}) {
    return <button
        className={classNames('button', className, {'button--outline' : outline})}
        onClick={onButtonClick}
    >{children}</button>
}

export default Button;