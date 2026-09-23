import React, { useState } from 'react'
import LinkButton from './LinkButton';

const LinkDiv = () => {
    const [links, setLinks] = useState([
        { 
            "Name":"PortFolio",
            "link":"https://nuthan-portfolio-nine.vercel.app/",
            "Symbol":"fa-regular fa-user"

        },
        {
            "Name": "Github",
            "link": "https://github.com/nuthan-444/Email_Spam_Detection_Model",
            "Symbol": "fa-brands fa-github",
        },
        {
            "Name": "🤗 Hugging Face",
            "link": "https://huggingface.co/nuthan-444/email-spam-detection/tree/main",
            "Symbol": "fa-brands fa-hugging-face",
        },
    ]);
    return (
        <div className='link-div'>
            {links.length > 0 ?
                links.map((link, idx) => (
                    <LinkButton key={idx} data={link} />
                ))
                : <></>
            }
        </div>
    )
}

export default LinkDiv
