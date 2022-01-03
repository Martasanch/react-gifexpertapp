import React from 'react'
import PropTypes from "prop-types";

export const GifGridItem = ({id, title, url}) => {
//console.log(title, url)
    return (
        <div className='card animate__animated animate__bounce animate__fadeIn'>
            <img src={url} alt={title}></img>
            <p>{title}</p>
        </div>
    )
}


//Para obligar a poner un valor a las prop
GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  };
 