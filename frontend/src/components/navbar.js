import React from 'react'
import {Link} from "react-router-dom"

const navbar = () => {
  return (
    <div>
        <header>
            <div className="container">
                <Link to="/">

                <h1>Workout buddy</h1>
                
                </Link>
            </div>
        </header>
    </div>
  )
}

export default navbar