import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

const Button = props => {
    return (
        <button
            className={`btn ${props.className}`}
            onClick={props.onClick ? () => props.onClick() : null}
        >
            {props.children}
        </button>
    );
}

export const OutlineButton = props => {
    return (
        <Button
            className={`btn-outline ${props.className}`}
            onClick={props.onClick ? () => props.onClick() : null}
        >
            {props.children}
        </Button>
    );
}

export const ButtonFavorite = ({className, onClick, text, svgIcon}) => {
    return (
        <button
            className={`btn-favorite ${className && className}`}
            onClick={onClick ? () => onClick() : null}
        >
            <span className='text'>{text}</span>
            <img src={svgIcon} alt="" />
        </button>
    );
}

Button.propTypes = {
    onClick: PropTypes.func
}

export default Button;
