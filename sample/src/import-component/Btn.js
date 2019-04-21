import React from "react"

export default ({ children, color }) => {
    return (
        <button style={{backgroundColor: color}}>
            {children}
        </button>
    );
}
