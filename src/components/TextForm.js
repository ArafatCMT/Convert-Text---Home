import React, {useState} from 'react';

export default function TextForm (props){
    
    const handleUpClick = () =>{
        if(text.length > 0)
        {
            setText(text.toUpperCase())
            props.ShowAlart("Convert to UpperCase!" , "success")
        }
        else
        {
            props.ShowAlart("Please enter some text first!", "warning")
        }
    }
    const handleLoClick = () =>{
        if(text.length > 0)
        {
            setText(text.toLowerCase())
            props.ShowAlart("Convert to LowerCase!" , "success")
        }
        else
        {
            props.ShowAlart("Please enter some text first!", "warning")
        }
        
    }
    const handleClear = () =>{

        if(text.length > 0)
        {
            setText('')
            setWordCount(0);
        }
        else
        {
            props.ShowAlart("Please enter some text first!", "warning")
        }
        
    }
    const handleOnChange = (event) =>{
        // Trim করে যদি ইনপুট ফাঁকা হয়, তাহলে word count = 0
        let newText = event.target.value;
        setText(newText);
        if (newText.trim() === "") {
            setWordCount(0);
            return;
        }

        // স্পেস দিয়ে শব্দ আলাদা করে গণনা করা
        let wordsArray = newText.trim().split(/\s+/);
        setWordCount(wordsArray.length);
        
    }

    const handleTitleCase = () =>{
        if(text.length > 0)
        {
            let newText = text.split(" ");
            let titleArry = [];
            for(let valText of newText)
            {
                valText = valText.toLowerCase()
                titleArry.push(valText.charAt(0).toUpperCase()+valText.slice(1))
            }
            setText(titleArry.join(" "))
            props.ShowAlart("Convert to TitleCase!" , "success")
        }
        else
        {
            props.ShowAlart("Please enter some text first!", "warning")
        }
    }

    const toggleRemoveSpace = () =>{
        if(text.length > 0)
        {
            let newValue = text.split(/[ ]+/)
            setText(newValue.join(" "))
            props.ShowAlart("Removed ExtraSpaces!" , "success")
        }
        else
        {
            props.ShowAlart("Please enter some text first!", "warning")
        }
    }

    const handleCopy = () =>{
        if(text.length > 0)
        {
            navigator.clipboard.writeText(text)
            props.ShowAlart("Text copied to clipboard!" , "success")
        }
        else
        {
            props.ShowAlart("Please enter some text first!", "warning")
        }
    }

    const [text, setText] = useState('') 
    const [wordCount, setWordCount] = useState(0)
    return(
        <>
            <div style={{color: props.mode === 'dark'?'white':'#212121'}}>
                <h1 className='mt-3 title'>{props.heading}</h1>
                <div className="mb-3 mt-2">
                    <textarea className={`form-control ${props.mode==='dark'?'dark':""}`} id="exampleFormControlTextarea1" rows="8" placeholder='Type Here...' value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'?'#303030':'white' ,color: props.mode === 'dark'?'white':'#212121'}}></textarea>
                </div>
                <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to UpperCase</button>
                <button className='btn btn-success mx-1' onClick={handleLoClick}>Convert to LowerCase</button>
                <button className='btn btn-warning mx-1' onClick={handleTitleCase}>Convert to TitleCase</button> 
                <button className='btn btn-info mx-1' onClick={toggleRemoveSpace}>Remove ExtraSpace</button> 
                <button className='btn btn-dark mx-1' onClick={handleCopy}>Copy to ClipBoard</button> 
                <button className='btn btn-danger mx-1' onClick={handleClear}>Clear Text</button>

                <h2 className='title mt-3'>Your Text Summary</h2>
                <p><b>{wordCount}</b> Words and <b>{text.length}</b> Characters.</p>

                <h2 className="title mt-3">Preview</h2>
                <p>{text}</p>
            </div>
            
        </>
    )
}