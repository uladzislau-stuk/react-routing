import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'

import './VendingMachine.css'

class App extends Component {
	render() {
		return (
			<div className='VendingMachine'>
				<div className='VendingMachine-question'>Do you want something?</div>
				<div className='VendingMachine-goods'>
					<ul>
						<li><NavLink to='/chips'>Chips</NavLink></li>
						<li><NavLink to='/sardines'>Sardines</NavLink></li>
						<li><NavLink to='/soda'>Soda</NavLink></li>
					</ul>
				</div>
			</div>
		);
	}
}

export default App