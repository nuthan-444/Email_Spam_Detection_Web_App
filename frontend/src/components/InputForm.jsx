import React, { useState } from 'react';
import axios from "axios"



const InputForm = () => {
  const [mail,setMail] = useState("");
  const [result,setResult] = useState("");

  const handleSubmit = async() => {
    try{
      const response = await axios.post(`${import.meta.env.VITE_API_KEY}/predict`,{email:mail})
      alert(response.data.prediction)
      setMail("")
    } catch(error) {
      alert(error.response?.data?.error ||"Server Error");
    }
  }

  return (
    <>
    <div className="heading">
      <pre>
        <span>Predicit</span> Your Email is<br />
      <span>Spam</span> or <span>Not</span> By<br />
       Using Our <span>Machine Learning Model .</span>
      </pre>
    </div>

    <div className='outer-div'>

      <div className="inner-div">

        <div className='input-div'>
        <textarea type="text" className='input-mail-content' value={mail} onChange={(e) => setMail(e.target.value)} placeholder='Paste Email Content ...'/>
        </div>

        <div className='send-btn-div'>
          <button className="send-btn" title='predict' onClick={handleSubmit}>
            <i className="fa-solid fa-arrow-right-long" style={{color: "rgb(0, 0, 0)"}}></i>
          </button>
        </div>

      </div>

    </div>
    </>
  )
}

export default InputForm;
