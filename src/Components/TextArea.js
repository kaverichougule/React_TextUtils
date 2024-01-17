import React from 'react';

function TextArea(props) {
    return (
        <div>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <div className="task_performing_btns">
                <button>Convert Uppercase</button>
                <button>Convert Lowercase</button>
                <button>Clear Text</button>
                <button>Copy To Clipboard</button>
                <button>Remove Extra Spaces</button>

            </div>
        </div>
    );
}

export default TextArea;