import React from 'react'
import "./button.css";

export default function Button( {handleDelete}) {
    return (
        <div>
            <button type = "button"  className = "delete"  onClick = { handleDelete }> delete me</button>
        </div>
    )
}
