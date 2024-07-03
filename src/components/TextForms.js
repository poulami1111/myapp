import React,{useState} from 'react'



export default function TextForms (props) {

  const handleUpClick=()=>{
    console.log("uppercase was client" + text);
    let newText=text.toLocaleUpperCase();
    setText(newText)
  }

  const handleLoClick=()=>{
    console.log("uppercase was client" + text);
    let newText=text.toLocaleLowerCase();
    setText(newText)
  }

  const handleonChange=(event)=>{
    console.log("on change");
    setText(event.target.value);
  }
  const [text,setText]=useState('');
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className='mb-3'>
        <label for="exampleFormControlTextarea" className='form-label'><h1>Enter Your Text Here</h1></label>
        <textarea className="form-control" value={text} onChange={handleonChange} id="exampleFormControlTextarea"  rows="3"></textarea>
    </div>
    <button className="button primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
    <button className="button primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
 </div>
   <div className="container my-3">
       <h1>your text summary</h1>
       <p>{text.split (" ").length} words and
        {text.length} characters</p>
        <p>{0.008* text.split (" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>
   </div>

 </>
  )
}

