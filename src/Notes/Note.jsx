import React from 'react'

const Note = ({ id, text, date, handleDeleteNote }) => {

    return (
        <div className='note'>
            <span >{text}</span>
            <div className="note-footer">
                <small className='date' >{date}</small>
                <i className="fas fa-trash-alt" onClick={() => handleDeleteNote(id)}></i>
            </div>
        </div>
    )
}

export default Note
