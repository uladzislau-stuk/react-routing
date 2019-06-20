import React, {Component} from 'react'
import { Route, Switch } from 'react-router-dom'
import NavBar from './NavBar'
import VendingMachine from './VendingMachine'
import Food from './Food'

import './App.css'

class App extends Component {
	render() {
		return (
			<div className='App'>
				<NavBar />
				<Switch>
					<Route exact path='/' render={() => <VendingMachine />} />
					<Route exact path='/chips' render={() => <Food name='Chips' />} />
					<Route exact path='/sardines' render={() => <Food name='Sardines' />} />
					<Route exact path='/soda' render={() => <Food name='Soda' />} />
				</Switch>
			</div>
		);
	}
}

export default App