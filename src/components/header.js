import React from "react";

function header({ number, data }) {
    console.log(number, 'header component re render')
    return <div>
        Headers

        <div>
            <code> {JSON.stringify(data)} </code>
        </div>
    </div>;
}

export default React.memo(header);
