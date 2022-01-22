import React from "react";

function header({ number, increment }) {
    console.log(number, 'header component re render')
    return <div>
        Headers
        <div>
            <button onClick={increment}>Click</button>
        </div>
    </div>;
}

export default React.memo(header);
