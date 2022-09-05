import React, {useState} from 'react'



function TextForm(props) {

  const [text , setText] = useState('enter');

  const handleTextField = (e) =>{
    setText (e.target.value)
  }
  
  const handleUpClick = () =>{
    // alert('Uppercase Clicked');
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLoClick = () =>{
    // alert('Uppercase Clicked');
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleClickClear = () =>{
    // alert('Uppercase Clicked');
    let newText = '';
    setText(newText);
  }

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  } 

  const handleReverse = (event) => {
    /* Convert string to array*/
    let strArr = text.split("");
    /* Reverse array*/
    strArr = strArr.reverse();
    /* Convert array to string*/
    let newText = strArr.join("");
    setText(newText);
  };
  
  return (
    <>
    <div className="container">
      <div className="form-group">
        <h1 className=' my-3'>{props.heading}</h1>
        <p className='my-3'>{props.para}</p>
        <textarea className="form-control" id="my-box" value={text} onChange={handleTextField} placeholder='Type or Paster Your Content Here' rows="8"></textarea>

        <button className='btn btn-primary my-3 ' onClick={handleUpClick}>Convert UpperCase</button>
        <button className='btn btn-primary my-3 mx-3' onClick={handleLoClick}>Convert LowerCase</button>
        <button className='btn btn-primary my-3' onClick={handleReverse}>Reverse Text</button>
        <button className="btn btn-warning my-3 mx-3" onClick={speak} >Speak</button>
        <button className='btn btn-danger my-3' onClick={handleClickClear}>CLear Text</button>


      </div>
    </div>

    <div className="container">
        <h1>Text Summary</h1>
        <p>{text.split(" ").length} Words {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Reading</p>
        <h1>Preview</h1>
        <p>{text}</p>
    </div>
  </>
  )
}

export default TextForm