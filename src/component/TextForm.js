import React,{useState} from 'react'

export default function TextForm(props) {
  const handleOnChange=(event)=>{
    //console.log("On Change the text");
    setText(event.target.value);
  }
  const handleUpperCaseClick=()=>{
    //console.log("Upper Case was Clicked:- " +text);
    var newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase !","success");
  }
  const handleLowerCaseClick=()=>{
    //console.log("Upper Case was Clicked:- " +text);
    var newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase !","Success");
  }
  const handleClearClick=()=>{
    //console.log("Upper Case was Clicked:- " +text);
    var newText=" ";
    setText(newText);
    props.showAlert("Converted to Clear Text !","Success");
  }
  const handleCaptilizeWord=()=>{
    //console.log("Upper Case was Clicked:- " +text);
    var newText=text.charAt.split(" ").toUpperCase();
    setText(newText);
    props.showAlert("Converted to Capitalize Word !","Success");
  }
  const handleCopy=()=>{
    var newText=document.getElementById("text");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("Converted to Copy Text !","Success");
  }
  const handleExtraSpace=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Converted to remove extra Spaces in Text !","Success");
  }
  const [text,setText]=useState("Enter the text here");
  return (
  //FOR TEXT
  <>
  <div className="container" style={{color:props.mode ==='dark'?'white':'grey'}} >
      <div className="mx-5  mb-3">
      <h1 style={{color:props.mode ==='grey'?'white':'grey'}}>{props.heading}</h1>
      <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='grey'?'white':'grey',color:props.mode ==='dark'?'white':'grey'}}  id="text" rows="6"></textarea>
      <button className="btn btn-secondary my-3" onClick={handleUpperCaseClick}>ToUpperCase</button>
      <button className="btn btn-secondary my-3 mx-2" onClick={handleLowerCaseClick}>ToLowerCase</button>
      <button className="btn btn-secondary my-3 mx-2" onClick={handleClearClick}>ToClearText</button>
      <button className="btn btn-secondary my-3 mx-2" onClick={handleCaptilizeWord}>ToCaptilizeWord</button>
      <button className="btn btn-secondary my-3 mx-2" onClick={handleCopy}>ToCopy</button>
      <button className="btn btn-secondary my-3 mx-2" onClick={handleExtraSpace}>Remove Extra Space</button>
      
      </div>
  </div>
  
  <div className="container mx-5  mb-3" style={{color:props.mode ==='grey'?'white':'grey'}}>
  <h2>Your Text Summary</h2>
  <h3>You have {text.split(" ").length} words and {text.length} characters</h3>
  <h5>{0.008*text.split(" ").length}Minutes Required to read the Above Text for slow reader </h5>
  <h5>{0.00334*text.split(" ").length}Minutes Required to read the Above Text for Avergage reader </h5>
  </div>
  </>     
  )
}
