import react from "react";

function header({ number }) {
    console.log(number, 'header component re render')
    return <div>
        Headers
    </div>;
}

export default react.memo(header);
