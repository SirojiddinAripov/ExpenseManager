import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'
const Header = ({startLogout}) => (
    <header>
        <h1>Expense Manager</h1>
        <NavLink activeClassName="is-active" to='/dashboard' exact={true}>Dashboard</NavLink>
        <span>   </span>
        <NavLink activeClassName="is-active" to='/create'>Create Expense</NavLink>
        <span>   </span>
        <button onClick={startLogout}>Logout</button>
    </header>
)

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})
export default connect(undefined, mapDispatchToProps)(Header)