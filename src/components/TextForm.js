import React, {useState} from 'react'

export default function TextForm(props){
    const handleUpClick = () => {
        let text = document.getElementById('myBox').value;
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }
    const handleLoClick = () => {
      let text = document.getElementById('myBox').value;
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lowercase","success");
    }
    const handleClearClick = () => {
      if(document.getElementById('myBox').value.length>0){
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared","success");
      }else{
        props.showAlert("Text is already empty","danger");
      }
    }
    const handleCopy = () => {
      let text = document.getElementById('myBox');
      if(text.value.length<1){
        props.showAlert("Text is empty","danger");
      }else{
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text copied to clipboard","success");
      }
    }
    const handleExtraSpaces = () => {
      let text = document.getElementById('myBox').value;
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra spaces removed","success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter text here');

  return (
    <>
      <div className='container' style={{color: props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} style={{color: props.mode==='light'?'black':'white',backgroundColor: props.mode==='light'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my -1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
      </div>
      <div className="container my-2" style={{color: props.mode==='light'?'black':'white'}}>
        <h2>Your Text Summary</h2>
        <p>{text.length<1?0:text.trim().split(" ").length} words and {text.length} characters</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Text in the box above to preview it here"}</p>
      </div>
    </>
    
  )
}
