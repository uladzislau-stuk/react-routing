import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'

import './NavBar.css'

class NavBar extends Component {
	render() {
		return (
			<nav className='NavBar'>
				<NavLink to='/' className='NavBar-item' activeClassName='NavBar-item--active'>Home</NavLink>
				<NavLink to='/chips' className='NavBar-item' activeClassName='NavBar-item--active'>Chips</NavLink>
				<NavLink to='/sardines' className='NavBar-item' activeClassName='NavBar-item--active'>Sardines</NavLink>
				<NavLink to='/soda' className='NavBar-item' activeClassName='NavBar-item--active'>Soda</NavLink>
			</nav>
		)
	}
}

export default NavBar;