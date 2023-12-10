import { useState } from "react"
import React from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("on click")
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted into Upper Case!", "success")
    };

    const handleLoClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted into Lower Case!", "success")
    };

    const handleClearClick = () => {
        let newText = ''
        setText(newText)
        props.showAlert("Text has been Cleared!", "success")
    };

    const toggleCase = (text) => {
        let result = '';
        for (let i = 0; i < text.length; i++) {
            const char = text.charAt(i);
            if (i % 2 === 0) {
                // Convert even-indexed characters to uppercase
                result += char.toUpperCase();
            } else {
                // Convert odd-indexed characters to lowercase
                result += char.toLowerCase();
            }
        }
        return result;
    };
    const handleAltClick = () => {
        const newText = toggleCase(text)
        setText(newText);
        props.showAlert("Converted into Alternating Case!", "success")
    };

    const handleCopy = () => {
        // let text = document.getElementById("myBox")
        // text.select();
        navigator.clipboard.writeText(text)
        // document.getSelection().removeAllRanges()
        props.showAlert("Text has been copied!", "success")
    };

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra space has been removed!", "success")
    };

    const handleOnChange = (event) => {
        // console.log("on change")
        setText(event.target.value)
    };

    const [text, setText] = useState("")

    return (
        <>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="mb-2">
                    <label className="form-label"></label>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white' }} rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleAltClick}>aLtErNaTiNg CaSe </button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Space</button>

            </div>
            <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h3>Your text summery</h3>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} <b>Words</b> and {text.length} <b>Charaters</b></p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} <b>wpm</b></p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : 'Enter your text to perview'}</p>
            </div>
        </>
    )
}
