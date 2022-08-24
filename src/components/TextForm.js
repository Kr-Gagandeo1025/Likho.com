import React, {useState} from 'react';



export default function TextForm(props){
  const UpperCase = (e)=>{
    e.preventDefault();
    // console.log("ok");
    let newText = text.toUpperCase()
    setText(newText);
    props.ShowAlert("Converted to Upper Case","success")
  }

  const LowerCase = (e)=>{
    e.preventDefault();
    let newText = text.toLowerCase()
    setText(newText)
    props.ShowAlert("Converted to Lower Case","success")
  }

  const CopyToClipboard = (e) =>{
    e.preventDefault();
    let mytext = text
    navigator.clipboard.writeText(mytext)
    props.ShowAlert("Text Copied","warning")
  }

  const ReplaceAll = (e) =>{
    e.preventDefault();
    let newText = text.replaceAll(findtext,replacetext)
    setText(newText)
    setFindText("Find")
    setReplaceText("Replace")
    props.ShowAlert("All Occuring Replaced","danger")
  }
  const ClearText = (e) =>{
    e.preventDefault();
    setText("Enter Text Here")
    props.ShowAlert("Cleared","danger")
  }

  const handleOnChange = (event)=>{
    //   console.log("on change");
      setText(event.target.value);
  }

  const handleFindOnChange = (event)=>{
      setFindText(event.target.value);
  }

  const handleReplaceOnChange = (event)=>{
      setReplaceText(event.target.value);
  }
  const [text, setText] = useState('Enter Text Here');
  const [findtext, setFindText] = useState('Find');
  const [replacetext, setReplaceText] = useState('Replace');
  return (
    <div>
        <form >
            <h1 className='m-3' style={{color: props.TextMode==='dark'?'black':'white'}}>{props.heading}</h1>
            <div className={`mb-3 mt-3 bg-${props.mode}`}>
                <textarea type="text" className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="6"/>
            </div>
            <button className="btn btn-outline-success mx-1 my-1" onClick={(e)=>{UpperCase(e)}}>To Upper Case</button>
            <button className="btn btn-outline-success mx-1 my-1" onClick={(e)=>{LowerCase(e)}}>To Lower Case</button>
            <button className="btn btn-outline-warning mx-1 my-1" onClick={(e)=>{CopyToClipboard(e)}}>Copy to Clipboard</button>
            <button className="btn btn-outline-danger mx-1 my-1" onClick={(e)=>{ClearText(e)}}>Clear Text</button>
            <div className="m-3">
            <textarea type="text" className="form-control-w-4" value={findtext} onChange={handleFindOnChange} id="myFindBox" rows="1"/>
            <textarea type="text" className="form-control-w-4" value={replacetext} onChange={handleReplaceOnChange} id="myFindBox" rows="1"/>
            <button className="btn btn-outline-danger mx-1" onClick={(e)=>{ReplaceAll(e)}}>Replace All</button>
            </div>
            <div className='cobtainer my-3' style={{color: props.TextMode==='dark'?'black':'white'}}>
              <h4>Text Details</h4>
              <p>Words: {text.split(" ").length-1}  Characters: {text.length}</p>
              <p>{(0.008 * text.split(" ").length)} Minutes to Read</p>
              <h4>Preview</h4>
              <p>{text}</p>
            </div>
        </form>
    </div>
  );
}


