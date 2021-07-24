import React from 'react';

export const Textarea = ({ handleChange, ...otherProps }) =>(
    <textarea className="transition duration-700 ease-in-out w-full outline-none h-24 resize-none" onChange={handleChange}{...otherProps}>
        
    </textarea>
)

