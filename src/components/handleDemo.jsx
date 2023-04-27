import React, { useState } from "react";

export function Parent(){

    const getImage = (input) => {
        input = 'image got from API';
        return input;
    }

    const handleSubmit = (input) => {
        return getImage(input);
    }

    return(
        <ChildSearchBar onSubmit={handleSubmit} />
    )
}


export default function ChildSearchBar({ onSubmit }){

    const [value, setValue] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault(); 
        onSubmit(value);
    }

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return(
        <form className="searchBar" onSubmit={handleFormSubmit} >
            <input value={value} onChange={handleChange}  />    
        </form>
    )
}