import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <React.Fragment>
            <ul>
                <NavLink to='/' activeClassName='active'>Top</NavLink>
                <NavLink to='/new'>New</NavLink>
            </ul>
        </React.Fragment>
    )
}

export default Nav