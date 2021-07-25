import React from 'react'
import {Avatar} from '@material-ui/core'
import "./sidebarchat.css"

function sidebarchat() {
    return (
        <div className="sidebarchat">
            
            <Avatar />

            <div className='sidebarchat__info'>
                <h2>Room Name</h2>
                <p>this is the last message in the room</p>
            </div>

        </div>
    )
}

export default sidebarchat


