
import React from 'react'
import { useState } from 'react'

export const TextForm = (props) => {
    const [Text, SetText] = useState("");
    // const [btntext,setbtntext]=useState("Enable dark mode");
    
    const handleonchange = (event) => {
        SetText(event.target.value);
    }
    function clicked() {
         let newtext = Text.toUpperCase();
        SetText(newtext);
        props.showalert("Converted To UpperCase","success");
    }
    function clicked2(){
        SetText(Text.toLowerCase());
        props.showalert("Converted To LowerCase","success");
    }
    
    const cleartext=()=>{
        SetText("");
        props.showalert("Text Cleared","success");
    }
    const copytext=()=>{
        const  elem= document.getElementById('Mybox');
        elem.select();
        navigator.clipboard.writeText(elem.value);
        // console.log(elem);
        props.showalert("Copied To Clipboard","success");
    }
    
    return (
        <>
        <div className='px-5 py-5 mt-3 container rounded' >
            <h2>{props.heading}</h2>
            <div className="form-floating my-3">
                <textarea className="form-control" placeholder="Leave a comment here" onChange={handleonchange} id="Mybox"   value={Text}></textarea>
             </div>
             <button   onClick={clicked} className='btn mx-3 btn-sm btn-dark'>Convert To UpperCase </button>
             <button   onClick={clicked2} className='btn btn-sm btn-dark'>Convert To LowerCase </button>
              <button   onClick={cleartext} className='btn mx-3 btn-sm btn-dark'>cleartext </button>
              <button   onClick={copytext} className='btn mx-3 btn-sm btn-dark'>copytext </button>
         <div className='px-5 py-2 container my-4  ' >
            <h3   >Your Text Summary</h3>
            <p   >characters <b>{Text.length}</b></p>
            <p   >Words: <b>{Text.split(" ").length}</b> </p>
            <p   >time required to read this <b>{0.08* Text.split(" ").length}</b> minutes</p>
            <p   >preview:<br/>{Text.length<1?"Your entered text will be previewed here...":Text}</p>

        </div>
        </div>
        
        </>
    )
}
