import React from 'react'
import { useNavigate } from 'react-router-dom'

const LinkButton = ({ data }) => {
    const navigate = useNavigate();
    return (
        <button className='link-btn' onClick={() => { window.open(data.link, "_blank"); }}>
            <i className={data?.Symbol}></i> <h3>{data.Name}</h3>
        </button>
    )
}

export default LinkButton
