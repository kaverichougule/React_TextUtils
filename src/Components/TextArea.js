import React, { useReducer, useRef } from 'react';
import "./TextArea.css";
function TextArea(props) {
    let refValue=useRef(null)
    
    function TaskToPerform(state,task){
        switch(task){
            case "data":
                return refValue.current.value;
            case "UPPERCASE":
                return state.toUpperCase();
            case "LOWERCASE":
                return state.toLowerCase();
            case "CLEAR":
                return "";
            case "COPY":
                navigator.clipboard.writeText(state);
                return state;
            case "EXTRASPACE":
                return state.split(/\s+/).join(" ");
            default:
                return state; 
        }
    }
    let [state,dispatch]=useReducer(TaskToPerform,"");
    return (
        <div className='container'>
            <h1>TextUtis - Word Counter, Charecter Counter, Remove Extra Space</h1>
            <div className='textAreaContainer'>
                <h2>Enter Your Text Here:</h2>
                <textarea className='TextArea' onChange={()=>{
                    dispatch("data");
                }} ref={refValue} value={state} name="" id="" cols="50" rows="10"></textarea>
            </div>
            <div className="task_performing_btns">
                <button onClick={()=>{
                    dispatch("UPPERCASE");
                }}>Convert Uppercase</button>
                <button onClick={()=>{
                    dispatch("LOWERCASE");
                }}>Convert Lowercase</button>
                <button onClick={()=>{
                    dispatch("CLEAR");
                }}>Clear Text</button>
                <button onClick={()=>{
                    dispatch("COPY");
                }}>Copy To Clipboard</button>
                <button onClick={()=>{
                    dispatch("EXTRASPACE");
                }}>Remove Extra Spaces</button>
            </div>
            <div className="textInfo">
                <h2>Summary of Your Text</h2>
                <p>Number of words: {state.split(/\s+/).filter(word=>word!=="").length}</p>
                <p>Number of characters: {state.length}</p>
                <p>Reading Time: {(state.split(/\s+/).filter(word=>word!=="").length*0.008).toFixed(3)}</p>
            </div>
            <div className='displayText'>
                <textarea className="toDisplay" name=""  id="" disabled value={state}></textarea>
            </div>
        </div>
    );
}

export default TextArea;