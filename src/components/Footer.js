import React from 'react'

var style = {
    position: "fixed",
    bottom: "0",
    width: "100%",
}

var phantom = {
  width: '100%',
}

function Footer({ children }) {
    return (
        <div>
            <div style={phantom} />
            <div style={style}>
                { children }
            </div>
        </div>
    )
}

export default Footer
