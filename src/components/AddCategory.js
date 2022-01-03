import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('')
    const handleInputChange = (e) =>{
        setInputValue(e.target.value)
        //console.log(inputValue)
    }
    const handleSubmit = (e) =>{
        e.preventDefault() //para no permitir que el input recargue el navegador
        
        console.log( 'Submit Hecho')
        if(inputValue.trim().length>2) {
        setCategories(cats =>[inputValue, ...cats ])
        setInputValue('')
        }
    }
    return (
        <form onSubmit={ handleSubmit}>

            <input
                type='text'
                placeholder='Añade categoría'
                value={ inputValue }
                onChange={ handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}